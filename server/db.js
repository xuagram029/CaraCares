const mysql = require('mysql')

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"cara_db",
})

module.exports = db