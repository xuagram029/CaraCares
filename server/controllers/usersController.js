const db = require('../db')

const getUsers = (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
        if(err) return res.json(err)
        return res.json(result)
    })
}

const postUser = (req, res) => {
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    db.query("INSERT INTO employees (`firstname`, `lastname`) VALUES (?, ?)",
        [firstname, lastname],
        (err, result) => {
            if (err) return res.json(err)
            return res.json(result)
        }
    )
}

module.exports = { getUsers, postUser }