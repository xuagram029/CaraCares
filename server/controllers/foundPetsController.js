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

const getFoundPets = (req, res) =>{
  db.query("SELECT * FROM foundpet", (err, data) =>{
      if(err) return res.json(err)
      return res.json(data)
  })
}

const getFoundPetsFront = (req, res) =>{
    db.query("SELECT * FROM foundpet WHERE status = 'accepted' LIMIT 4", (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

const getAcceptedPets = (req, res) => {
    db.query("SELECT * FROM foundpet WHERE status = 'accepted'", (err, data) =>{
      if(err) return res.json(err)
      return res.json(data)
  })

}
const getPendingPets = (req, res) => {
    db.query("SELECT * FROM foundpet WHERE status = 'pending'", (err, data) =>{
      if(err) return res.json(err)
      return res.json(data)
  })
}

const acceptReport = (req, res) => {
  const { id } = req.params;
  db.query("UPDATE foundpet SET status = 'accepted' WHERE id = ?", id, (err, data) => {
    if (err) {
      return res.status(401).json(err);
    }
    return res.json({message: "Report accepted"})
  });
};

const addFoundPet = (req, res) => {
  upload.fields([{ name: 'image1' }, { name: 'image2' }])(req, res, (err) => {
    if (err) {
      return res.json({ error: 'Error uploading file' });
    }

    const foundername = req.body.foundername;
    const phone = req.body.phone;
    const email = req.body.email;
    const gender = req.body.gender;
    const color = req.body.color;
    const found = req.body.found;
    const description = req.body.description;
    const typeofpet = req.body.typeofpet;

    const photo1 = req.files['image1'][0].filename;
    const photo2 = req.files['image2'][0].filename;

    db.query(
      "INSERT INTO foundpet(`foundername`, `phone`, `email`, `gender`, `color`, `found`, `description`, `typeofpet`, `photo`, `photo2`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [foundername, phone, email, gender, color, found, description, typeofpet, photo1, photo2],
      (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
      }
    );
  });
};

const updateFoundPets = (req, res) =>{
    const foundPetId = req.params.id

    const foundername = req.body.foundername
    const phone = req.body.phone
    const email = req.body.email
    const gender = req.body.gender
    const color = req.body.color
    const found = req.body.found
    const description = req.body.description
    const typeofpet = req.body.typeofpet

    db.query("UPDATE foundpet SET `foundername`= ?, `phone` = ?, `email` = ?, `gender` = ?, `color` = ?, `found` = ?, `typeofpet` = ?, `description` = ?   WHERE id = ?",
    [foundername, phone, email, gender, color, found, description, typeofpet, foundPetId],
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
  
const deleteReport = (req, res) =>{
  const lostPetId = req.params.id

  db.query("DELETE FROM foundpet WHERE id = ?",
  [lostPetId],
  (err, data) =>{
      if(err) return res.json(err)
      return res.json(data)
  })
}


module.exports = { getFoundPets, getFoundPet, addFoundPet, deleteFoundPet, updateFoundPets, adoptFoundPet, adoptedFoundPet, availFoundPet, getFoundPetsFront, getAcceptedPets, getPendingPets, acceptReport, deleteReport}