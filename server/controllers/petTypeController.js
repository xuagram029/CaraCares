const db = require('../db')

const getDog = (req, res) => {
    db.query("SELECT * FROM shelterencode WHERE type = 'dog'",
    (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}

const getCat = (req, res) => {
    db.query("SELECT * FROM shelterencode WHERE type = 'cat'",
    (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}

module.exports = { getDog, getCat }