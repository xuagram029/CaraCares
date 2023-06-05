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

const getFoundPets = (req, res) => {
  db.query("SELECT * FROM foundpet", (err, data) => {
    if (err) {
      console.error('Error retrieving found pets:', err);
      res.status(500).json({ error: 'Failed to retrieve found pets.' });
    } else {
      res.json(data);
    }
  });
};

const getFoundPetsFront = (req, res) => {
  db.query("SELECT * FROM foundpet WHERE status = 'accepted' ORDER BY id DESC LIMIT 4 ", (err, data) => {
    if (err) {
      console.error('Error retrieving front found pets:', err);
      res.status(500).json({ error: 'Failed to retrieve front found pets.' });
    } else {
      res.json(data);
    }
  });
};

const getAcceptedPets = (req, res) => {
  db.query("SELECT * FROM foundpet WHERE status = 'accepted'", (err, data) => {
    if (err) {
      console.error('Error retrieving accepted found pets:', err);
      res.status(500).json({ error: 'Failed to retrieve accepted found pets.' });
    } else {
      res.json(data);
    }
  });
};

const getPendingPets = (req, res) => {
  db.query("SELECT * FROM foundpet WHERE status = 'pending'", (err, data) => {
    if (err) {
      console.error('Error retrieving pending found pets:', err);
      res.status(500).json({ error: 'Failed to retrieve pending found pets.' });
    } else {
      res.json(data);
    }
  });
};

const acceptReport = (req, res) => {
  const { id } = req.params;
  db.query("UPDATE foundpet SET status = 'accepted' WHERE id = ?", id, (err, data) => {
    if (err) {
      console.error('Error accepting report:', err);
      res.status(500).json({ error: 'Failed to accept report.' });
    } else {
      res.json({ message: 'Report accepted' });
    }
  });
};

const addFoundPet = (req, res) => {
  upload.single('image')(req, res, (err) => {
    if (err) {
      console.error('Error uploading file:', err);
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

    const photo = req.file ? req.file.filename : null; // Get the file name if it exists

    db.query(
      "INSERT INTO foundpet(`foundername`, `phone`, `email`, `gender`, `color`, `found`, `description`, `typeofpet`, `photo`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [foundername, phone, email, gender, color, found, description, typeofpet, photo],
      (err, data) => {
        if (err) {
          console.error('Error adding found pet:', err);
          res.status(500).json({ error: 'Failed to add found pet.' });
        } else {
          res.json(data);
        }
      }
    );
  });
};

const updateFoundPets = (req, res) => {
  const foundPetId = req.params.id;

  const foundername = req.body.foundername;
  const phone = req.body.phone;
  const email = req.body.email;
  const gender = req.body.gender;
  const color = req.body.color;
  const found = req.body.found;
  const description = req.body.description;
  const typeofpet = req.body.typeofpet;

  db.query(
    "UPDATE foundpet SET `foundername`= ?, `phone` = ?, `email` = ?, `gender` = ?, `color` = ?, `found` = ?, `typeofpet` = ?, `description` = ?   WHERE id = ?",
    [foundername, phone, email, gender, color, found, description, typeofpet, foundPetId],
    (err, data) => {
      if (err) {
        console.error('Error updating found pet:', err);
        res.status(500).json({ error: 'Failed to update found pet.' });
      } else {
        res.json(data);
      }
    }
  );
};

const deleteFoundPet = (req, res) => {
  const foundPetId = req.params.id;

  db.query("DELETE FROM foundpet WHERE id = ?", [foundPetId], (err, data) => {
    if (err) {
      console.error('Error deleting found pet:', err);
      res.status(500).json({ error: 'Failed to delete found pet.' });
    } else {
      res.json(data);
    }
  });
};

const getFoundPet = (req, res) => {
  const foundPetId = req.params.id;

  db.query("SELECT * FROM foundpet WHERE id = ?", [foundPetId], (err, data) => {
    if (err) {
      console.error('Error retrieving found pet:', err);
      res.status(500).json({ error: 'Failed to retrieve found pet.' });
    } else {
      res.json(data);
    }
  });
};

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
};

const availFoundPet = (req, res) => {
  db.query("SELECT * FROM foundpet WHERE adopted = 'false'", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(data);
    }
  });
};

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

const deleteReport = (req, res) => {
  const lostPetId = req.params.id;

  db.query("DELETE FROM foundpet WHERE id = ?", [lostPetId], (err, data) => {
    if (err) {
      console.error('Error deleting report:', err);
      res.status(500).json({ error: 'Failed to delete report.' });
    } else {
      res.json(data);
    }
  });
};

module.exports = {
  getFoundPets,
  getFoundPet,
  addFoundPet,
  deleteFoundPet,
  updateFoundPets,
  adoptFoundPet,
  adoptedFoundPet,
  availFoundPet,
  getFoundPetsFront,
  getAcceptedPets,
  getPendingPets,
  acceptReport,
  deleteReport
};
