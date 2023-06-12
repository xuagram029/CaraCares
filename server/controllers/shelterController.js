const db = require('../db');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const getShelter = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM shelter WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error('Error retrieving shelter:', err);
      res.status(500).json({ error: 'Failed to retrieve shelter.' });
    } else {
      res.json(result);
    }
  });
};

const getAllShelter = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM shelter", [id], (err, result) => {
    if (err) {
      console.error('Error retrieving shelter:', err);
      res.status(500).json({ error: 'Failed to retrieve shelter.' });
    } else {
      res.json(result);
    }
  });
};

const regShelter = (req, res) => {
  const { name, email, address, username, pass, number } = req.body;

  if(!name || !email || address || !username || !pass || !number){
    return res.status.json({message: "Please fill in all the fields"})
  }

  bcrypt.hash(pass, saltRounds, (err, hash) => {
    if (err) {
      console.error('Error hashing password:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    db.query("SELECT * FROM shelter WHERE username = ?", username, (err, resp) => {
      if (err) {
        console.error('Error checking username:', err);
        return res.status(400).json({ error: 'Bad request' });
      }

      if (resp.length > 0) {
        return res.json({ message: "Username already taken" });
      }

      db.query(
        "INSERT INTO shelter(`name`, `email`, `address`, `username`, `pass`, `number`) VALUES(?, ?, ?, ?, ?, ?)",
        [name, email, address, username, hash, number],
        (err, resp) => {
          if (err) {
            console.error('Error registering shelter:', err);
            return res.status(500).json({ error: 'Failed to register shelter.' });
          }

          return res.json({ message: "Registered successfully" });
        }
      );
    });
  });
};

const updateShelter = (req, res) => {
  const id = req.params.id;
  const {name, email, address, number} = req.body;
  if(!name || !email || !address || !number){
    return res.status(401).json({message: "Please fill in all the fields"})
  }
  db.query("UPDATE shelter SET  `name` = ?, `email` = ?, `address` = ?, `number` = ? WHERE id = ?", [name, email, address, number, id],
    (err, result) => {
      if (err) {
        console.error('Error updating shelter:', err);
        return res.status(401).json({ error: 'Unauthorized' });
      }
      return res.json({ message: "Updated successfully" });
    });
};

const deleteShelter = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM shelter WHERE id = ?", [id],
    (err, result) => {
      if (err) {
        console.error('Error updating shelter:', err);
        return res.status(401).json({ error: 'Unauthorized' });
      }
      return res.json({ message: "Deleted successfully" });
    });
};

const login = (req, res) => {
  const { username, pass } = req.body;

  if (!username || !pass) {
    return res.status(401).send("Please enter username and password");
  }

  db.query("SELECT * FROM shelter WHERE username = ?", username, (err, resp) => {
    if (err) {
      console.error('Error retrieving shelter:', err);
      return res.status(500).json({ error: 'Failed to retrieve shelter.' });
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

module.exports = {
  getShelter,
  regShelter,
  updateShelter,
  getAllShelter,
  deleteShelter,
  login,
  logout
};