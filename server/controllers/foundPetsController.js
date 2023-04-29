const db = require('../db')

const getFoundPets = (req, res) =>{
    db.query("SELECT * FROM foundpet", (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const addFoundPet = (req, res) =>{
    const title = req.body.title
    const description = req.body.description

    db.query("INSERT INTO foundpet(`title`, `description`) VALUES (?, ?)",
    [title, description],
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
