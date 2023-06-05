const db = require('../db');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

const getLostPets = (req, res) => {
  db.query('SELECT * FROM lostpet', (err, data) => {
    if (err) {
      console.error('Error retrieving lost pets:', err);
      res.status(500).json({ error: 'Failed to retrieve lost pets.' });
    } else {
      res.json(data);
    }
  });
};

const getLostPetsFront = (req, res) => {
  db.query('SELECT * FROM lostpet ORDER BY id DESC LIMIT 4', (err, data) => {
    if (err) {
      console.error('Error retrieving front lost pets:', err);
      res.status(500).json({ error: 'Failed to retrieve front lost pets.' });
    } else {
      res.json(data);
    }
  });
};

const getAcceptedPets = (req, res) => {
  db.query("SELECT * FROM lostpet WHERE status = 'accepted'", (err, data) => {
    if (err) {
      console.error('Error retrieving accepted pets:', err);
      res.status(500).json({ error: 'Failed to retrieve accepted pets.' });
    } else {
      res.json(data);
    }
  });
};

const getPendingPets = (req, res) => {
  db.query("SELECT * FROM lostpet WHERE status = 'pending'", (err, data) => {
    if (err) {
      console.error('Error retrieving pending pets:', err);
      res.status(500).json({ error: 'Failed to retrieve pending pets.' });
    } else {
      res.json(data);
    }
  });
};

const acceptReport = (req, res) => {
  const { id } = req.params;
  db.query('UPDATE lostpet SET status = "accepted" WHERE id = ?', id, (err, data) => {
    if (err) {
      console.error('Error accepting report:', err);
      res.status(500).json({ error: 'Failed to accept report.' });
    } else {
      res.json({ message: 'Report accepted' });
    }
  });
};

const addLostPet = (req, res) => {
  upload.single('image')(req, res, (err) => {
    if (err) {
      console.error('Error uploading file:', err);
      return res.status(500).json({ error: 'Error uploading file.' });
    }

    const petname = req.body.petname;
    const phone = req.body.phone;
    const email = req.body.email;
    const typeofpet = req.body.typeofpet;
    const gender = req.body.gender;
    const color = req.body.color;
    const breed = req.body.breed;
    const lost = req.body.lost;
    const description = req.body.description;
    const address = req.body.address;
    const age = req.body.age;
    const ownername = req.body.ownername;
    const photo = req.file ? req.file.filename : null; // Get the file name if it exists

    db.query(
      'INSERT INTO lostpet (`petname`, `phone`, `email`, `typeofpet`, `gender`, `color`, `breed`, `lost`, `description`, `address`, `age`, `ownername`, `photo`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        petname,
        phone,
        email,
        typeofpet,
        gender,
        color,
        breed,
        lost,
        description,
        address,
        age,
        ownername,
        photo
      ],
      (err, data) => {
        if (err) {
          console.error('Error adding lost pet:', err);
          return res.status(500).json({ error: 'Failed to add lost pet.' });
        }
        res.json(data);
      }
    );
  });
};

const updateLostPets = (req, res) => {
  const foundPetId = req.params.id;

  const petname = req.body.petname;
  const phone = req.body.phone;
  const email = req.body.email;
  const typeofpet = req.body.typeofpet;
  const gender = req.body.gender;
  const color = req.body.color;
  const breed = req.body.breed;
  const lost = req.body.lost;
  const description = req.body.description;
  const address = req.body.address;
  const age = req.body.age;
  const ownername = req.body.ownername;

  db.query(
    'UPDATE lostpet SET `petname` = ?, `phone` = ?, `email` = ?, `typeofpet` = ?, `gender` = ?, `color` = ?, `breed` = ?, `lost` = ?, `description` = ?, `address` = ?, `age` = ?, `ownername` = ? WHERE id = ?',
    [
      petname,
      phone,
      email,
      typeofpet,
      gender,
      color,
      breed,
      lost,
      description,
      address,
      age,
      ownername,
      foundPetId
    ],
    (err, data) => {
      if (err) {
        console.error('Error updating lost pet:', err);
        return res.status(500).json({ error: 'Failed to update lost pet.' });
      }
      res.json(data);
    }
  );
};

const deleteLostPet = (req, res) => {
  const lostPetId = req.params.id;

  db.query('DELETE FROM lostpet WHERE id = ?', [lostPetId], (err, data) => {
    if (err) {
      console.error('Error deleting lost pet:', err);
      return res.status(500).json({ error: 'Failed to delete lost pet.' });
    }
    res.json(data);
  });
};

const getLostPet = (req, res) => {
  const lostPetId = req.params.id;

  db.query('SELECT * FROM lostpet WHERE id = ?', [lostPetId], (err, data) => {
    if (err) {
      console.error('Error retrieving lost pet:', err);
      return res.status(500).json({ error: 'Failed to retrieve lost pet.' });
    }
    res.json(data);
  });
};

const deleteReport = (req, res) => {
  const lostPetId = req.params.id;

  db.query('DELETE FROM lostpet WHERE id = ?', [lostPetId], (err, data) => {
    if (err) {
      console.error('Error deleting report:', err);
      return res.status(500).json({ error: 'Failed to delete report.' });
    }
    res.json(data);
  });
};

module.exports = {
  getLostPets,
  getLostPet,
  getLostPetsFront,
  addLostPet,
  deleteLostPet,
  updateLostPets,
  getPendingPets,
  getAcceptedPets,
  acceptReport,
  deleteReport
};
