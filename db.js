const path = require("path");
const { Pool } = require("pg");
const dotenv = require("dotenv");

/* Load server/.env locally. On Render, real environment variables are used. */
dotenv.config({ path: path.join(__dirname, ".env") });

/* Prefer DATABASE_URL (Neon / Render). Fall back to separate DB_* values locally. */
const config = process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    }
    : {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 5432,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    };

const pool = new Pool(config);

pool.on("error", function (error) {
    console.error("Unexpected PostgreSQL pool error:", error);
});

module.exports = pool;
