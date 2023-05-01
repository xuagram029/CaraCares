const db = require('../db')

const getEncodedPets = (req, res) =>{
    db.query("SELECT * FROM shelterencode", (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const addEncodedPet = (req, res) =>{
    const name = req.body.name
    const gender = req.body.gender
    const color = req.body.color
    const age = req.body.age
    const breed = req.body.breed
    const shelternumber = req.body.shelternumber
    const sheltername = req.body.sheltername
    const shelteremail = req.body.shelteremail
    const shelteraddress = req.body.shelteraddress
    const type = req.body.type

    db.query("INSERT INTO shelterencode(`name`, `gender`, `color`,`age`, `breed`, `shelternumber`, `sheltername`,`shelteremail`, `shelteraddress`, `type`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [name, gender, color, age, breed, shelternumber, sheltername, shelteremail, shelteraddress, type],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

// const updateshelterencodes = (req, res) =>{
//     const encodedPetId = req.params.id

//     const title = req.body.title
//     const description = req.body.description

//     db.query("UPDATE books SET `title`= ?, `description` = ?, `price` = ? WHERE id = ?",
//     [title, description, price, bookId],
//     (err, data) =>{
//         if(err) return res.json(err)
//         return res.json(data)
//     })
// }

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

module.exports = { getEncodedPets, getEncodedPet, addEncodedPet, deleteEncodedPet}
