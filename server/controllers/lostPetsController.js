const db = require('../db')

const getLostPets = (req, res) =>{
    db.query("SELECT * FROM lostpet", (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const addLostPet = (req, res) =>{
    const name = req.body.name
    const phone = req.body.phone
    const email = req.body.email
    const breed = req.body.breed
    const gender = req.body.gender
    const color = req.body.color
    const lost = req.body.lost
    const description = req.body.description
    const typeofpet = req.body.typeofpet

    db.query("INSERT INTO lostpet(`name`, `phone`, `email`,`breed`,`gender`,`color`, `lost`,`description`,`typeofpet`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [name, phone, email, breed, gender, color, lost, description, typeofpet],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

// const updatelostpets = (req, res) =>{
//     const foundPetId = req.params.id

//     const title = req.body.title
//     const description = req.body.description

//     db.query("UPDATE books SET `title`= ?, `description` = ?, `price` = ? WHERE id = ?",
//     [title, description, price, bookId],
//     (err, data) =>{
//         if(err) return res.json(err)
//         return res.json(data)
//     })
// }

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

module.exports = { getLostPets, getLostPet, addLostPet, deleteLostPet}
