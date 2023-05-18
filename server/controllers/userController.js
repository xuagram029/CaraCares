const bcrypt = require('bcrypt')
const db = require('../db');

const getUsers = (req, res) =>{
    db.query("SELECT * FROM newusers", (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const handleNewUser = (req, res) => {
    const fullname = req.body.fullname
    const email = req.body.email
    const address = req.body.address
    const birthdate = req.body.birthdate
    const username = req.body.username
    const password = bcrypt.hashSync(req.body.password, 10);

    if(!username || !password){
        return res.status(400).json({ message: 'Please fillup the input fields' });
    }
    db.query("SELECT * FROM newusers WHERE username = ? ", [username], (err, result) => {
        if(err) return res.sendStatus(500)

        if(result.length > 0){
            return res.status(409).json({ message: 'Username already taken' });
        }

        db.query(
            // added the user in the array
            "INSERT INTO newusers(`fullname`, `email`, `address`, `birthdate`, `username`, `password`, `role`) VALUES (?, ?, ?, ?, ?, ?, ?)", 
            [fullname, email, address, birthdate, username, password, JSON.stringify({ User: 2001 })],
            (err, data) => {
                if(err) return res.json(err)
                return res.json(data)
            }
        )
    })
}

const verifyUsers = (req, res) =>{
    const fullname = req.body.fullname
    const email = req.body.email
    const address = req.body.address
    const birthdate = req.body.birthdate
    const verified = req.body.verified
    const userId = req.params.id
    db.query("UPDATE newusers SET `fullname` = ? ,  `email` = ?,  `address` = ?,  `birthdate` = ?,  `verified` = ? WHERE id = ? ", [fullname, email, address, birthdate, verified, userId], (err, result) => {
        if(err) return res.json(err)
        return res.json({"message": "user updated"})
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
        return res.json({"message": "user updated"})
    })
}

const getUser = (req, res) =>{
    const userId = req.params.id
    db.query("SELECT * FROM newusers WHERE id = ? ", [userId], (err, result) => {
        if(err) return res.json(err)
        return res.json(result)
    })
}

module.exports = { getUsers, handleNewUser, verifyUsers, getUser, updateUser }