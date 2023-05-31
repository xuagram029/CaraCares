const db = require('../db')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination:(req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({storage: storage})

const getEncodedPets = (req, res) =>{
    db.query("SELECT * FROM shelterencode LIMIT 4", (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const addEncodedPet = (req, res) =>{
  upload.single('image')(req, res, (err) => {
    if (err) {
      return res.status(401).json({ error: 'Error uploading file' });
    }
    const name = req.body.name
    const gender = req.body.gender
    const color = req.body.color
    const age = req.body.age
    const shelternumber = req.body.shelternumber
    const sheltername = req.body.sheltername
    const shelteremail = req.body.shelteremail
    const shelteraddress = req.body.shelteraddress
    const type = req.body.type
    const photo = req.file ? req.file.filename : null; // Get the file name if it exists


    db.query("INSERT INTO shelterencode(`name`, `gender`, `color`,`age`,`type`, `shelternumber`, `sheltername`,`shelteremail`, `shelteraddress`, `photo`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [name, gender, color, age, type, shelternumber, sheltername, shelteremail, shelteraddress, photo],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
  });
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
  const adoptedDate = new Date();

  db.query(
    "UPDATE shelterencode SET adopted = 1, adopted_date = ? WHERE id = ?",
    [adoptedDate, foundPetId],
    (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).json(data);
      }
    }
  );
};

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

const totalAdoption = (req, res) => {
  db.query("SELECT COUNT (*) AS total FROM shelterencode WHERE adopted = 1", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      const total = result[0].total
      res.status(200).json(total);
    }
  });
}

module.exports = { getEncodedPets, getEncodedPet, addEncodedPet, deleteEncodedPet, updateshelterencodes, adoptFoundPet, availFoundPet, adoptedFoundPet, totalAdoption}