const db = require('../db');

const getDogs = (req, res) => {
  db.query("SELECT * FROM shelterencode WHERE type = 'dog'", (err, data) => {
    if (err) {
      console.error('Error retrieving dogs:', err);
      return res.status(500).json({ error: 'Failed to retrieve dogs.' });
    }
    res.json(data);
  });
};

const getAdoptedDogs = (req, res) => {
  db.query("SELECT * FROM shelterencode WHERE type = 'dog' AND adopted = 1", (err, data) => {
    if (err) {
      console.error('Error retrieving adopted dogs:', err);
      return res.status(500).json({ error: 'Failed to retrieve adopted dogs.' });
    }
    res.json(data);
  });
};

const getCats = (req, res) => {
  db.query("SELECT * FROM shelterencode WHERE type = 'cat'", (err, data) => {
    if (err) {
      console.error('Error retrieving cats:', err);
      return res.status(500).json({ error: 'Failed to retrieve cats.' });
    }
    res.json(data);
  });
};

const getAdoptedCats = (req, res) => {
  db.query("SELECT * FROM shelterencode WHERE type = 'cat' AND adopted = 1", (err, data) => {
    if (err) {
      console.error('Error retrieving adopted cats:', err);
      return res.status(500).json({ error: 'Failed to retrieve adopted cats.' });
    }
    res.json(data);
  });
};

const getPet = (req, res) => {
  const petId = req.params.id;
  db.query("SELECT * FROM shelterencode WHERE id = ?", petId, (err, data) => {
    if (err) {
      console.error('Error retrieving pet:', err);
      return res.status(500).json({ error: 'Failed to retrieve pet.' });
    }
    res.json(data);
  });
};

const deletePet = (req, res) => {
  const id = req.params.id;

  // Delete related records from the 'visitation' table first
  db.query("DELETE FROM visitation WHERE petid = ?", id, (err, data) => {
    if (err) {
      console.error('Error deleting related visitation records:', err);
      return res.status(500).json({ error: 'Failed to delete pet.' });
    }

    // Once the related records are deleted, delete the pet from the 'shelterencode' table
    db.query("DELETE FROM shelterencode WHERE id = ?", id, (err, data) => {
      if (err) {
        console.error('Error deleting pet:', err);
        return res.status(500).json({ error: 'Failed to delete pet.' });
      }
      res.json({ message: 'Successfully deleted' });
    });
  });
};


const addVisit = (req, res) => {
  const petid = req.params.id;
  const visitnumber = req.body.visitnumber;
  const visitor = req.body.visitor;
  const confirmation = req.body.confirmation;
  const visitdate = req.body.visitdate;

  db.query(
    'INSERT INTO visitation(`visitnumber`, `visitor`, `confirmation`, `visitdate`, `petid`) VALUES (?, ?, ?, ?, ?)',
    [visitnumber, visitor, confirmation, visitdate, petid],
    (err, data) => {
      if (err) {
        console.error('Error adding visit:', err);
        return res.status(500).json({ error: 'Failed to add visit.' });
      }
      res.json({ message: 'Visitation Confirmed' });
    }
  );
};

const getVisits = (req, res) => {
  const id = req.params.id;
  const query = `
    SELECT v.id, v.visitnumber, v.confirmation, v.visitdate, v.visitor
    FROM visitation AS v
    INNER JOIN shelterencode AS s ON v.petid = s.id 
    WHERE s.id = ?;
  `;

  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error retrieving visits data:', err);
      return res.status(500).json({ error: 'Failed to retrieve visits data.' });
    }
    res.json(results);
  });
};

const editVisit = (req, res) => {
  const id = req.params.id;
  const visitnumber = req.body.visitnumber;
  const visitor = req.body.visitor;
  const confirmation = req.body.confirmation;
  const visitdate = req.body.visitdate;

  db.query(
    'UPDATE visitation SET `visitnumber` = ?, `visitor` = ?, `confirmation` = ?, `visitdate` = ? WHERE id = ?',
    [visitnumber, visitor, confirmation, visitdate, id],
    (err, result) => {
      if (err) {
        console.error('Error editing visit:', err);
        return res.status(500).json({ error: 'Failed to edit visit.' });
      }
      res.json({ message: 'Success' });
    }
  );
};

const getVisit = (req, res) => {
  const id = req.params.id;
  const query = `
    SELECT v.id, v.visitnumber, v.confirmation, v.visitdate, v.visitor
    FROM visitation AS v
    WHERE v.id = ?;
  `;

  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error retrieving visit data:', err);
      return res.status(500).json({ error: 'Failed to retrieve visit data.' });
    }
    res.json(results);
  });
};

module.exports = {
  getDogs,
  getAdoptedDogs,
  getCats,
  getAdoptedCats,
  getPet,
  deletePet,
  addVisit,
  getVisits,
  getVisit,
  editVisit,
};