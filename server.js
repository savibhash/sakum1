/*
 * Vercel detects this root entry point and invokes the Express application.
 * The same app is used by the local npm start command.
 */
module.exports = require("./server/server");
