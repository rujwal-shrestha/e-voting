const mysql = require('mysql');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "relaruru4",
    database: "voting"
});

module.exports = db;