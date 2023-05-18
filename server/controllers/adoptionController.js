const db = require("../db")

// Route to submit an adoption request
const requestAdoption = (req, res) => {
    const { petName, userName } = req.body;
  
    // Execute an INSERT query to add the request to the database
    const query = 'INSERT INTO adoption (pet_name, user_name, status) VALUES (?, ?, ?)';
    db.query(query, [petName, userName, 'pending'], (error, results) => {
      if (error) {
        console.error('Error submitting adoption request:', error);
        res.status(500).json({ error: 'Failed to submit adoption request.' });
      } else {
        res.status(200).json({ message: 'Adoption request submitted successfully.' });
      }
    });
}

module.exports = { requestAdoption }