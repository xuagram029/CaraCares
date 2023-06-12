const mysql = require('mysql')

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"cara_db",
})

db.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      return;
    }
    console.log("Connected to the database!");
  });
  
  db.on("error", (err) => {
    console.error("Database connection error:", err);
});

module.exports = db