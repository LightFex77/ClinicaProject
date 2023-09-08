const pg = require("pg");

const connection = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_LOCALHOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

module.exports = connection;