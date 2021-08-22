const mysql = require('mysql2');
//connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Brave2114!',
        database: 'employees'
    },
    console.log('Connected to employee database.')
);

module.exports = db;