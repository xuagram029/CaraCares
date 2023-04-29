const db = require('../db')

const getFoundPets = (req, res) =>{
    db.query("SELECT * FROM foundpet", (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const addFoundPet = (req, res) =>{
    const name = req.body.name
    const phone = req.body.phone
    const email = req.body.email
    const breed = req.body.breed
    const gender = req.body.gender
    const color = req.body.color
    const found = req.body.found
    const description = req.body.description

    db.query("INSERT INTO foundpet(`name`, `phone`, `email`,`breed`,`gender`,`color`, `found`,`description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [name, phone, email, breed, gender, color, found, description],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

// const updateFoundPets = (req, res) =>{
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

const deleteFoundPet = (req, res) =>{
    const foundPetId = req.params.id

    db.query("DELETE FROM foundpet WHERE id = ?",
    [foundPetId],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const getFoundPet = (req, res) => {
    const foundPetId = req.params.id
    
    db.query("SELECT * FROM foundpet WHERE id = ?",
    [foundPetId],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

module.exports = { getFoundPets, getFoundPet, addFoundPet, deleteFoundPet}
