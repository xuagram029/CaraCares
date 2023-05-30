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

    db.query("INSERT INTO shelterencode(`name`, `gender`, `color`,`age`,`type`, `shelternumber`, `sheltername`,`shelteremail`, `shelteraddress`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [name, gender, color, age, type, shelternumber, sheltername, shelteremail, shelteraddress ],
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
    const adopted = req.body.adopted

    db.query("UPDATE shelterencode SET `name` = ?, `gender` = ?, `color` = ?,`age` = ?, `type` = ?, `shelternumber`= ?, `sheltername` = ?,`shelteremail`= ?, `shelteraddress` = ?, `adopted` = ? WHERE id = ?",
    [name, gender, color, age, type, shelternumber, sheltername, shelteremail, shelteraddress,adopted, encodedPetId ],
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

const adoptFoundPet = (req, res) => {
    const foundPetId = req.params.id;
    db.query("UPDATE shelterencode SET adopted = 1 WHERE id = ?", [foundPetId], (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).json(data);
      }
    });
}

const availFoundPet = (req, res) => {
    db.query("SELECT * FROM shelterencode WHERE adopted = 0", (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).json(data);
      }
    });
}

const adoptedFoundPet = (req, res) => {
    db.query("SELECT * FROM shelterencode WHERE adopted = 1", (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).json(data);
      }
    });
};

module.exports = { getEncodedPets, getEncodedPet, addEncodedPet, deleteEncodedPet, updateshelterencodes, adoptFoundPet, availFoundPet, adoptedFoundPet}