const path = require("path");
const { Pool } = require("pg");
const { neon } = require("@neondatabase/serverless");
const dotenv = require("dotenv");


/*
 * Local Neon credentials are kept in the project-root .env.local file.
 * server/.env remains available for the session secret and for a local
 * PostgreSQL fallback. Values in server/.env intentionally take priority.
 */
dotenv.config({
    path: path.join(__dirname, "..", ".env.local"),
    quiet: true
});

dotenv.config({
    path: path.join(__dirname, ".env"),
    override: true,
    quiet: true
});


const databaseUrl =
    process.env.DATABASE_URL ||
    process.env.DB_URL ||
    "";


const IS_PRODUCTION =
    process.env.NODE_ENV === "production";


const localDatabaseConfig = {

    host: process.env.DB_HOST,

    port: Number(process.env.DB_PORT) || 5432,

    database: process.env.DB_NAME,

    user: process.env.DB_USER,

    password: process.env.DB_PASSWORD

};


if (IS_PRODUCTION && !process.env.DATABASE_URL) {

    throw new Error(
        "DATABASE_URL is required when NODE_ENV is production."
    );

}


if (
    !databaseUrl &&
    (
        !localDatabaseConfig.host ||
        !localDatabaseConfig.database ||
        !localDatabaseConfig.user ||
        !localDatabaseConfig.password
    )
) {

    throw new Error(
        "Database configuration is missing. Set DATABASE_URL or provide DB_HOST, DB_NAME, DB_USER, and DB_PASSWORD for local development."
    );

}


/*
 * The local network blocks Neon PostgreSQL TCP traffic on port 5432.
 * Neon’s HTTP driver uses HTTPS instead and returns the same result shape
 * that the Express routes expect from pool.query(...).
 */
const pool = databaseUrl
    ? createNeonHttpClient(databaseUrl)
    : createLocalPostgresPool(localDatabaseConfig);


function createNeonHttpClient(connectionString) {

    const sql = neon(
        connectionString,
        {
            fullResults: true
        }
    );

    return {

        query: function (queryText, values, callback) {

            const parameters =
                typeof values === "function"
                    ? []
                    : values || [];

            const done =
                typeof values === "function"
                    ? values
                    : callback;

            const query =
                sql.query(
                    queryText,
                    parameters
                );

            if (typeof done === "function") {

                query.then(
                    function (result) {
                        done(null, result);
                    },
                    function (error) {
                        done(error);
                    }
                );

            }

            return query;

        }

    };

}


function createLocalPostgresPool(config) {

    const postgresPool =
        new Pool(config);


    postgresPool.on(
        "error",
        function (error) {

            console.error(
                "Unexpected PostgreSQL pool error:",
                error
            );

        }
    );


    return postgresPool;

}


module.exports = pool;
