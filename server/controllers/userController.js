const bcrypt = require('bcrypt')
const db = require('../db');
const jwt = require('jsonwebtoken')

const getUsers = (req, res) =>{
    db.query("SELECT * FROM newusers", (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const handleNewUser = (req, res) => {
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const address = req.body.address
    const birthdate = req.body.birthdate
    const username = req.body.username
    const password = bcrypt.hashSync(req.body.password, 10);

    if(!firstname || !lastname || !email || !address || !birthdate|| !username || !password){
        return res.status(400).json({ message: 'Please fillup the input fields' });
    }
    db.query("SELECT * FROM newusers WHERE username = ? ", [username], (err, result) => {
        if(err) return res.sendStatus(500)

        if(result.length > 0){
            return res.status(409).json({ message: 'Username already taken' });
        }

        db.query(
            // added the user in the array
            "INSERT INTO newusers(`firstname`, `lastname`, `email`, `address`, `birthdate`, `username`, `password`) VALUES (?, ?, ?, ?, ?, ?, ?)", 
            [firstname, lastname, email, address, birthdate, username, password],
            (err, data) => {
                if(err) return res.json(err)
                return res.json({message: "registered successfully"})
            }
        )
    })
}

const verifyUsers = (req, res) =>{
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const address = req.body.address
    const birthdate = req.body.birthdate
    const verified = req.body.verified
    const userId = req.params.id
    db.query("UPDATE newusers SET `firstname` = ?, `lastname` = ?,  `email` = ?,  `address` = ?,  `birthdate` = ?,  `verified` = ? WHERE id = ? ", [firstname, lastname, email, address, birthdate, verified, userId], (err, result) => {
        if(err) return res.json(err)
        return res.json({message: "user updated"})
    })
}

const updateUser = (req, res) =>{
    const fullname = req.body.fullname
    const email = req.body.email
    const address = req.body.address
    const birthdate = req.body.birthdate
    const userId = req.params.id
    db.query("UPDATE newusers SET `fullname` = ? ,  `email` = ?,  `address` = ?,  `birthdate` = ?,  `verified` = ? WHERE id = ? ", [fullname, email, address, birthdate, verified, userId], (err, result) => {
        if(err) return res.json(err)
        return res.json({message: "user updated"})
    })
}

const getUser = (req, res) =>{
    const userId = req.params.id
    db.query("SELECT * FROM newusers WHERE id = ? ", [userId], (err, result) => {
        if(err) return res.json(err)
        return res.json(result)
    })
}

const deleteUser = (req, res) => {
    const userId = req.params.id
    db.query("DELETE FROM newusers WHERE id = ? ", [userId], (err, result) => {
        if(err) return res.json(err)
        return res.json({message:"user deleted"})
    })
}

const login = (req, res) => {
    const { username, pass } = req.body;
  
    if (!username || !pass) {
      return res.status(401).send("Please enter username and password");
    }
  
    db.query("SELECT * FROM newusers WHERE username = ?", username, (err, resp) => {
      if (err) {
        return res.json(err);
      }
  
      if (resp.length > 0) {
        const userDb = resp[0];
  
        bcrypt.compare(pass, userDb.password, (err, result) => { 
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

module.exports = { getUsers, handleNewUser, verifyUsers, getUser, updateUser, deleteUser, login, logout }