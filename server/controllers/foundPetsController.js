const db = require('../db')

const getFoundPets = (req, res) =>{
    db.query("SELECT * FROM foundpet LIMIT 4", (err, data) =>{
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
    const typeofpet = req.body.typeofpet

    db.query("INSERT INTO foundpet(`name`, `phone`, `email`,`breed`,`gender`,`color`, `found`,`description`,`typeofpet`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [name, phone, email, breed, gender, color, found, description, typeofpet],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const updateFoundPets = (req, res) =>{
    const foundPetId = req.params.id

    const name = req.body.name
    const phone = req.body.phone
    const email = req.body.email
    const breed = req.body.breed
    const gender = req.body.gender
    const color = req.body.color
    const found = req.body.found
    const description = req.body.description
    const typeofpet = req.body.typeofpet

    db.query("UPDATE foundpet SET `name`= ?, `phone` = ?, `email` = ?, `breed` = ?, `gender` = ?, `color` = ?, `found` = ?, `typeofpet` = ?, `description` = ?,   WHERE id = ?",
    [name, phone, email, breed, gender, color, found, description, foundPetId, typeofpet],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

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

const adoptFoundPet = (req, res) => {
    const foundPetId = req.params.id;
    db.query("UPDATE foundpet SET adopted = 1 WHERE id = ?", [foundPetId], (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).json(data);
      }
    });
}

const availFoundPet = (req, res) => {
    db.query("SELECT * FROM foundpet WHERE adopted = 'false'", (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).json(data);
      }
    });
}

const adoptedFoundPet = (req, res) => {
    db.query("SELECT * FROM foundpet WHERE adopted = 1", (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).json(data);
      }
    });
};
  
  


module.exports = { getFoundPets, getFoundPet, addFoundPet, deleteFoundPet, updateFoundPets, adoptFoundPet, adoptedFoundPet, availFoundPet}