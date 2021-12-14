// IMPORTS -------------------------------------------------------------------------------------------------------------
const mysql = require('mysql2');
require("dotenv").config();

// CONNECTION TO DATABASE ----------------------------------------------------------------------------------------------
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE,
    port: process.env.PORT,
});

// EXPORTS -------------------------------------------------------------------------------------------------------------
module.exports = db;

// Package :
//Before : "mysql": "^2.18.1"
//New :  "mysql2": "^2.3.3"