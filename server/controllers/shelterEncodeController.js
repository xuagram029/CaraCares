const db = require('../db')

const getEncodedPets = (req, res) =>{
    db.query("SELECT * FROM shelterencode LIMIT 4", (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const addEncodedPet = (req, res) =>{
    const name = req.body.name
    const gender = req.body.gender
    const color = req.body.color
    const age = req.body.age
    const shelternumber = req.body.shelternumber
    const sheltername = req.body.sheltername
    const shelteremail = req.body.shelteremail
    const shelteraddress = req.body.shelteraddress
    const type = req.body.type
    const datefound = req.body.datefound
    const foundby = req.body.foundby

    db.query("INSERT INTO shelterencode(`name`, `gender`, `color`,`age`,`type`, `shelternumber`, `sheltername`,`shelteremail`, `shelteraddress`, `foundby`, `datefound`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [name, gender, color, age, type, shelternumber, sheltername, shelteremail, shelteraddress, foundby, datefound ],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const updateshelterencodes = (req, res) =>{
    const encodedPetId = req.params.id

    const name = req.body.name
    const gender = req.body.gender
    const color = req.body.color
    const age = req.body.age
    const shelternumber = req.body.shelternumber
    const sheltername = req.body.sheltername
    const shelteremail = req.body.shelteremail
    const shelteraddress = req.body.shelteraddress
    const type = req.body.type
    const datefound = req.body.datefound
    const foundby = req.body.foundby

    db.query("UPDATE shelterencode SET `name` = ?, `gender` = ?, `color` = ?,`age` = ?, `type` = ?, `shelternumber`= ?, `sheltername` = ?,`shelteremail`= ?, `shelteraddress` = ?, `foundby` = ?, `datefound` = ? WHERE id = ?",
    [name, gender, color, age, type, shelternumber, sheltername, shelteremail, shelteraddress, foundby, datefound, encodedPetId ],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}


const deleteEncodedPet = (req, res) =>{
    const encodedPetId = req.params.id

    db.query("DELETE FROM shelterencode WHERE id = ?",
    [encodedPetId],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const getEncodedPet = (req, res) => {
    const encodedPetId = req.params.id
    
    db.query("SELECT * FROM shelterencode WHERE id = ?",
    [encodedPetId],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

module.exports = { getEncodedPets, getEncodedPet, addEncodedPet, deleteEncodedPet, updateshelterencodes}