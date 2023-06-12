const mysql = require('mysql')

const db = mysql.createConnection({
    host:"bpxua5artkbzxbv2g22o-mysql.services.clever-cloud.com",
    user:"us4wkfdij1clzhnk",
    password:"X9ZZsowGuI9n3apJsBBh",
    database:"bpxua5artkbzxbv2g22o",
    port: "3306"
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