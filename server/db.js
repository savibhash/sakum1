const path = require("path");
const { Pool } = require("pg");
const dotenv = require("dotenv");


/* Load SAKUM/server/.env */

dotenv.config({
    path: path.join(__dirname, ".env")
});


const pool = new Pool({

    host: process.env.DB_HOST,

    port: Number(process.env.DB_PORT),

    database: process.env.DB_NAME,

    user: process.env.DB_USER,

    password: process.env.DB_PASSWORD

});


pool.on("error", function (error) {

    console.error(
        "Unexpected PostgreSQL pool error:",
        error
    );

});


module.exports = pool;