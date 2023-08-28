const pg = require("pg");

const connection = new pg.Pool({
    user: "postgress",
    host: "localhost",
    database: "clinicaProject",
    password: "admin123",
    port: "5432"
});

module.exports = connection;