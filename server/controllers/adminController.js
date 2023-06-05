const db = require('../db');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const getAdmin = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM admins WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error('Error retrieving admin:', err);
      res.status(500).json({ error: 'Failed to retrieve admin.' });
    } else {
      res.json(result);
    }
  });
};

const regAdmin = (req, res) => {
  const { firstname, lastname, username, email, address, birthdate, pass } = req.body;

  bcrypt.hash(pass, saltRounds, (err, hash) => {
    if (err) {
      console.error('Error hashing password:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    db.query("SELECT * FROM admins WHERE username = ?", username, (err, resp) => {
      if (err) {
        console.error('Error checking username:', err);
        return res.status(400).json({ error: 'Bad request' });
      }

      if (resp.length > 0) {
        return res.json({ message: "Username already taken" });
      }

      db.query(
        "INSERT INTO admins(`firstname`, `lastname`, `email`, `address`, `birthdate`, `username`, `pass`) VALUES(?, ?, ?, ?, ?, ?, ?)",
        [firstname, lastname, email, address, birthdate, username, hash],
        (err, resp) => {
          if (err) {
            console.error('Error registering admin:', err);
            return res.status(500).json({ error: 'Failed to register admin.' });
          }

          return res.json({ message: "Registered successfully" });
        }
      );
    });
  });
};

const updateAdmin = (req, res) => {
  const id = req.params.id;
  const {firstname, lastname, email, address, birthdate} = req.body;
  db.query("UPDATE admins SET  `firstname` = ?, `lastname` = ?, `email` = ?, `address` = ?, `birthdate` = ? WHERE id = ?", [firstname, lastname, email, address, birthdate, id],
    (err, result) => {
      if (err) {
        console.error('Error updating admin:', err);
        return res.status(401).json({ error: 'Unauthorized' });
      }
      return res.json({ message: "Updated successfully" });
    });
};

const login = (req, res) => {
  const { username, pass } = req.body;

  if (!username || !pass) {
    return res.status(401).send("Please enter username and password");
  }

  db.query("SELECT * FROM admins WHERE username = ?", username, (err, resp) => {
    if (err) {
      console.error('Error retrieving admin:', err);
      return res.status(500).json({ error: 'Failed to retrieve admin.' });
    }

    if (resp.length > 0) {
      const userDb = resp[0];

      bcrypt.compare(pass, userDb.pass, (err, result) => { 
        if (err) {
          console.error('Error comparing passwords:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }

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

const getAdoptionRequests = (req, res) => {
  const query = 'SELECT * FROM adoption';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving adoption requests:', error);
      res.status(500).json({ error: 'Failed to retrieve adoption requests.' });
    } else {
      res.status(200).json(results);
    }
  });
};

const handleAdoptionRequest = (req, res) => {
  const requestId = req.params.id;
  const { action } = req.body;

  const query = 'UPDATE adoption SET status = ? WHERE id = ?';
  db.query(query, [action, requestId], (error, results) => {
    if (error) {
      console.error('Error processing adoption request:', error);
      res.status(500).json({ error: 'Failed to process adoption request.' });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ error: 'Request not found.' });
    } else {
      res.status(200).json({ message: 'Request processed successfully.' });
    }
  });
};

module.exports = {
  getAdmin,
  regAdmin,
  updateAdmin,
  login,
  logout,
  getAdoptionRequests,
  handleAdoptionRequest
};
