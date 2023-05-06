const db = require('../db')

const getLostPets = (req, res) =>{
    db.query("SELECT * FROM lostpet", (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const addLostPet = (req, res) =>{
    const petname = req.body.petname
    const phone = req.body.phone
    const email = req.body.email
    const typeofpet = req.body.typeofpet
    const gender = req.body.gender
    const color = req.body.color
    const breed = req.body.breed
    const lost = req.body.lost
    const description = req.body.description
    const address = req.body.address
    const age = req.body.age
    const ownername = req.body.ownername


    db.query("INSERT INTO lostpet(`petname`, `phone`, `email`, `typeofpet`, `gender`, `color`, `breed`, `lost`,`description`, `address`, `age`, `ownername`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [petname, phone, email, typeofpet, gender, color, breed, lost, description, address, age, ownername],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const updateLostPets = (req, res) =>{
    const foundPetId = req.params.id

    const petname = req.body.petname
    const phone = req.body.phone
    const email = req.body.email
    const typeofpet = req.body.typeofpet
    const gender = req.body.gender
    const color = req.body.color
    const breed = req.body.breed
    const lost = req.body.lost
    const description = req.body.description
    const address = req.body.address
    const age = req.body.age
    const ownername = req.body.ownername

    db.query("UPDATE lostpet SET `petname` = ?, `phone` = ?, `email` = ?, `typeofpet` = ?, `gender` = ?, `color` = ?, `breed` = ?, `lost` = ?, `description` = ?, `address` = ?, `age` = ?, `ownername` = ?   WHERE id = ?",
    [petname, phone, email, typeofpet, gender, color, breed, lost, description, address, age, ownername, foundPetId],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const deleteLostPet = (req, res) =>{
    const lostPetId = req.params.id

    db.query("DELETE FROM lostpet WHERE id = ?",
    [lostPetId],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const getLostPet = (req, res) => {
    const lostPetId = req.params.id
    
    db.query("SELECT * FROM lostpet WHERE id = ?",
    [lostPetId],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

module.exports = { getLostPets, getLostPet, addLostPet, deleteLostPet, updateLostPets}
