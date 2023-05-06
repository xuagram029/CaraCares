const db = require('../db')


const getVolunteers = (req, res) => {
    db.query("SELECT * FROM volunteer", (err, result) =>{
        if(err) return res.json(err)
        return res.json(result)
    })
}

const addVolunteer = (req, res) => {
    const fullname = req.body.fullname
    const email = req.body.email
    const mobile = req.body.mobile
    const address = req.body.address
    const message = req.body.message

    db.query("INSERT INTO volunteer(`fullname`, `email`, `mobile`, `address`, `message`) VALUES (?, ?, ?, ?, ?)", [fullname, email, mobile, address, message] ,(err, result) =>{
        if(err) return res.json(err)
        return res.json(result)
    })
}

module.exports = { getVolunteers, addVolunteer}