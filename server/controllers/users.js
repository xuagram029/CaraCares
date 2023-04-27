const db = require('../db')

const getUsers = (req, res) => {
    db.query("SELECT * FROM testuser", (err, result) => {
        if(err) return res.json(err)
        return res.json(result)
    })
}

module.exports = { getUsers }