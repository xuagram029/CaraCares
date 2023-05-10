const db = require('../db')
const bcrypt = require('bcrypt')
const saltRounds = 10;
const jwt = require("jsonwebtoken")
require("dotenv").config()
// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//     // Store hash in your password DB.
// });

// bcrypt.compare(pass, result[0].pass, (err, resp) =>{

// })
const regAdmin = (req, res) => {
    const { firstname, lastname, username, pass } = req.body;
  
    bcrypt.hash(pass, saltRounds, (err, hash) => {
      if (err) {
        return res.json(err);
      }
  
      db.query("SELECT * FROM admins WHERE username = ?", username, (err, resp) => {
        if (err) {
          return res.status(400).json(err);
        }
  
        if (resp.length > 0) {
          return res.json({ message: "username already taken" });
        }
  
        db.query(
          "INSERT INTO admins(`firstname`, `lastname`, `username`, `pass`) VALUES(?, ?, ?, ?)",
          [firstname, lastname, username, hash],
          (err, resp) => {
            if (err) {
              return res.json(err);
            }
  
            return res.json({ message: "Registered successfully" });
          }
        );
      });
    });
  };
  
  const login = (req, res) => {
    const { username, pass } = req.body;
  
    if (!username || !pass) {
      return res.status(401).send("Please enter username and password");
    }
  
    db.query("SELECT * FROM admins WHERE username = ?", username, (err, resp) => {
      if (err) {
        return res.json(err);
      }
  
      if (resp.length > 0) {
        const userDb = resp[0];
  
        bcrypt.compare(pass, userDb.pass, (err, result) => {
          if (result) {
            const token = jwt.sign(
              { id: userDb.id, role: userDb.role },
              process.env.ACCESS_TOKEN_SECRET
            );
  
            res.cookie("access_token", token, { httpOnly: true });
            return res.json({ resp });
          } else {
            return res.status(401).send("Password and username do not match");
          }
        });
      } else {
        return res.status(401).send("No user exists");
      }
    });
  };
  
  const logout = (req, res) => {
    res.clearCookie("access_token", {
      path: "/",
      domain: "localhost",
    });
  
    res.send("Logged out successfully");
  };
  
  module.exports = { regAdmin, login, logout };
  