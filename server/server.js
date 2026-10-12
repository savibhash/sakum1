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

app.listen(
    PORT,
    function () {

        console.log(
            `SAKUM server running on http://localhost:${PORT}`
        );

    }
);