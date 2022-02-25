/** Database connection for Microblog. */

const { Client } = require("pg");

/** MY METHOD */
// let DB_URI;

// DB_URI = {
//   host: "localhost",
//   user: "", // your username 
//   password: "", // your password
//   database: "" // LEAVE BLANK
// }

// DB_URI.database = (process.env.DATABASE_URL || "microblog");

// const client = new Client(DB_URI);


/** SPRINGBOARD METHOD */
const client = new Client(process.env.DATABASE_URL || "postgresql:///microblog");

client.connect();

module.exports = client;
