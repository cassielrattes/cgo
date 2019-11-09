const mysql = require('mysql');
const connection  = mysql.createConnection({
    host : 'localhost',
    username : 'root',
    password : '1234',
    database : 'cgo'
});

module.exports = connection;