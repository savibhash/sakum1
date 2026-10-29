const express = require("express");
const path = require("path");
const session = require("express-session");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

const pool = require("./db");


/* ======================================================
   LOAD ENVIRONMENT VARIABLES
====================================================== */

dotenv.config({
    path: path.join(__dirname, ".env")
});


const app = express();


const PORT =
    Number(process.env.PORT) || 3000;


const ROOT_DIR =
    path.join(__dirname, "..");
/* ======================================================
   MIDDLEWARE
====================================================== */


app.use(
    express.json()
);


app.use(
    express.urlencoded({
        extended: true
    })
);


/* ======================================================
   SESSION
====================================================== */

app.use(
    session({

        secret:
            process.env.SESSION_SECRET,

        resave: false,

        saveUninitialized: false,

        cookie: {

            httpOnly: true,

            sameSite: "lax",

            secure: false,

            maxAge: 1000 * 60 * 60 * 8

        }

    })
);


/* ======================================================
   FRONTEND FILES
====================================================== */

app.use(
    express.static(ROOT_DIR)
);


/* ======================================================
   TEST ROUTE
====================================================== */
app.get(
    "/api/health",
    async function (req, res) {

        try {

            const result =
                await pool.query(
                    "SELECT NOW() AS current_time"
                );

            res.json({

                success: true,

                message:
                    "SAKUM server and PostgreSQL are connected.",

                databaseTime:
                    result.rows[0].current_time

            });

        } catch (error) {

            console.error(
                "Database connection error:",
                error
            );

            res.status(500).json({

                success: false,

                message:
                    "PostgreSQL connection failed."

            });

        }

    }
);

/* ======================================================
   REGISTER
====================================================== */

app.post(
    "/api/auth/register",
    async function (req, res) {

        try {

            const {
                name,
                email,
                password
            } = req.body;


            if (
                !name ||
                !email ||
                !password
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "All fields are required."

                });

            }


            if (password.length < 6) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Password must contain at least 6 characters."

                });

            }


            const normalizedEmail =
                email.trim().toLowerCase();


            const existingUser =
                await pool.query(

                    `SELECT id
                     FROM users
                     WHERE email = $1`,

                    [normalizedEmail]

                );


            if (
                existingUser.rows.length > 0
            ) {

                return res.status(409).json({

                    success: false,

                    message:
                        "An account with this email already exists."

                });

            }


            const passwordHash =
                await bcrypt.hash(
                    password,
                    12
                );


            const result =
                await pool.query(

                    `INSERT INTO users
                     (name, email, password_hash)
                     VALUES ($1, $2, $3)
                     RETURNING id, name, email, created_at`,

                    [
                        name.trim(),
                        normalizedEmail,
                        passwordHash
                    ]

                );


            const user =
                result.rows[0];


            res.status(201).json({

                success: true,

                message:
                    "Account created successfully.",

                user

            });


        } catch (error) {

            console.error(
                "Registration error:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Server error."

            });

        }

    }
);


/* ======================================================
   LOGIN
====================================================== */

app.post(
    "/api/auth/login",
    async function (req, res) {

        try {

            const {
                email,
                password
            } = req.body;


            if (
                !email ||
                !password
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Email and password are required."

                });

            }


            const normalizedEmail =
                email.trim().toLowerCase();


            const result =
                await pool.query(

                    `SELECT
                        id,
                        name,
                        email,
                        password_hash,
                        profile_photo
                     FROM users
                     WHERE email = $1`,

                    [normalizedEmail]

                );


            if (
                result.rows.length === 0
            ) {

                return res.status(401).json({

                    success: false,

                    message:
                        "Invalid email or password."

                });

            }


            const user =
                result.rows[0];


            const passwordMatches =
                await bcrypt.compare(
                    password,
                    user.password_hash
                );


            if (!passwordMatches) {

                return res.status(401).json({

                    success: false,

                    message:
                        "Invalid email or password."

                });

            }


            req.session.userId =
                user.id;


            req.session.userName =
                user.name;


            req.session.userEmail =
                user.email;


            res.json({

                success: true,

                message:
                    "Login successful.",

                user: {

                    id: user.id,

                    name: user.name,

                    email: user.email,

                    profile_photo:
                        user.profile_photo

                }

            });


        } catch (error) {

            console.error(
                "Login error:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Server error."

            });

        }

    }
);


/* ======================================================
   CURRENT USER
====================================================== */

app.get(
    "/api/auth/me",
    async function (req, res) {

        try {

            if (!req.session.userId) {

                return res.status(401).json({

                    success: false,

                    message:
                        "Not logged in."

                });

            }


            const result =
                await pool.query(

                    `SELECT
                        id,
                        name,
                        email,
                        profile_photo,
                        created_at
                     FROM users
                     WHERE id = $1`,

                    [req.session.userId]

                );


            if (
                result.rows.length === 0
            ) {

                req.session.destroy(
                    function () { }
                );


                return res.status(401).json({

                    success: false,

                    message:
                        "User no longer exists."

                });

            }


            res.json({

                success: true,

                user:
                    result.rows[0]

            });


        } catch (error) {

            console.error(
                "Current-user error:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Server error."

            });

        }

    }
);


/* ======================================================
   LOGOUT
====================================================== */

app.post(
    "/api/auth/logout",
    function (req, res) {

        req.session.destroy(
            function (error) {

                if (error) {

                    console.error(
                        "Logout error:",
                        error
                    );


                    return res.status(500).json({

                        success: false,

                        message:
                            "Could not log out."

                    });

                }


                res.clearCookie(
                    "connect.sid"
                );


                res.json({

                    success: true,

                    message:
                        "Logged out successfully."

                });

            }
        );

    }
);


/* ======================================================
   SERVER
====================================================== */

/* ======================================================
   SAKUM FEEDBACK API
====================================================== */

app.post("/api/feedback", async function (req, res) {
    try {
        // Feedback belongs to the signed-in user.
        if (!req.session.userId) {
            return res.status(401).json({
                success: false,
                message: "Please log in before submitting feedback."
            });
        }

        const body = req.body || {};
        const category = body.category;
        const rating = Number(body.rating);
        const message =
            typeof body.message === "string"
                ? body.message.trim()
                : "";

        const allowedCategories = new Set([
            "design",
            "destinations",
            "trips",
            "journal",
            "bug",
            "suggestion",
            "other"
        ]);

        if (
            !allowedCategories.has(category) ||
            !Number.isInteger(rating) ||
            rating < 1 ||
            rating > 5 ||
            message.length < 10 ||
            message.length > 2000
        ) {
            return res.status(400).json({
                success: false,
                message: "Please check your feedback fields and try again."
            });
        }

        const result = await pool.query(
            `INSERT INTO feedback
                (user_id, category, rating, message)
             VALUES ($1, $2, $3, $4)
             RETURNING id, created_at`,
            [
                req.session.userId,
                category,
                rating,
                message
            ]
        );

        return res.status(201).json({
            success: true,
            message: "Thank you! Your feedback has been submitted successfully.",
            feedback: result.rows[0]
        });

    } catch (error) {
        console.error("Feedback submission error:", error);

        return res.status(500).json({
            success: false,
            message: "Feedback could not be saved. Please try again."
        });
    }
});


/* ======================================================
   SAKUM NEWSLETTER SIGN-UP API
====================================================== */

app.post("/api/newsletter/subscribe", async function (req, res) {
    try {
        const body = req.body || {};

        const firstName =
            typeof body.firstName === "string"
                ? body.firstName.trim()
                : "";

        const lastName =
            typeof body.lastName === "string"
                ? body.lastName.trim()
                : "";

        const email =
            typeof body.email === "string"
                ? body.email.trim().toLowerCase()
                : "";

        const validEmail =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (
            firstName.length < 1 ||
            firstName.length > 100 ||
            lastName.length < 1 ||
            lastName.length > 100 ||
            email.length > 255 ||
            !validEmail ||
            body.consent !== true
        ) {
            return res.status(400).json({
                success: false,
                message: "Please enter valid details and confirm your consent."
            });
        }

        await pool.query(
            `INSERT INTO newsletter_subscribers
                (first_name, last_name, email, consented_at)
             VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
             ON CONFLICT (email)
             DO UPDATE SET
                first_name = EXCLUDED.first_name,
                last_name = EXCLUDED.last_name,
                consented_at = CURRENT_TIMESTAMP,
                updated_at = CURRENT_TIMESTAMP,
                unsubscribed_at = NULL`,
            [firstName, lastName, email]
        );

        return res.status(201).json({
            success: true,
            message:
                "Your sign-up has been recorded. SAKUM email delivery is not enabled yet."
        });

    } catch (error) {
        console.error("Newsletter sign-up error:", error);

        return res.status(500).json({
            success: false,
            message: "Your sign-up could not be saved. Please try again."
        });
    }
});

app.listen(
    PORT,
    function () {

        console.log(
            `SAKUM server running on http://localhost:${PORT}`
        );

    }
);