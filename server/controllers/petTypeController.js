const db = require('../db')

const getDogs = (req, res) => {
    db.query("SELECT * FROM shelterencode WHERE type = 'dog' LIMIT 4",
    (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}

const getCats = (req, res) => {
    db.query("SELECT * FROM shelterencode WHERE type = 'cat' LIMIT 4",
    (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}

const getPet = (req, res) => {
    const petId = req.params.id
    db.query("SELECT * FROM shelterencode WHERE id = ?", petId, 
    (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}

const deletePet = (req, res) => {
    const id = req.body.id
    db.query("DELETE FROM shelterencode WHERE id = ?", id ,
    (err, data) => {
        if(err) return res.json(err)
        return res.json({message: "Successfully deleted"})
    })
}

const addVisit = (req, res) => {
    const petid = req.params.id
    const visitnumber = req.body.visitnumber
    const visitor = req.body.visitor
    const confirmation = req.body.confirmation
    const visitdate = req.body.visitdate


    db.query(
        "INSERT INTO visitation(`visitnumber`, `visitor`, `confirmation`, `visitdate`, `petid`) VALUES (?, ?, ?, ?, ?)",
        [visitnumber, visitor, confirmation, visitdate, petid],
        (err, data) => {
            if (err) return res.json(err)
            return res.json({ message: "Visitation Confirmed" })
        }
    )
}

// const addVisit = (req, res) => {
//     const id = req.params.id
//     const { number, name, confirmation, date } = req.body
//     db.query("UPDATE shelterencode set `visitnumber` = ?, `visitor` = ?, `confirmation` = ?, `visitdate` = ? WHERE id = ? ", [number, name, confirmation, date, id],
//      (err, data) => {
//         if (err) return res.json(err)
//         return res.json({message: "Visitation Confirmed"})
//      })
// }

const getVisits = (req, res) => {
    // Query to retrieve visits data
    const id = req.params.id
    const query = `
      SELECT v.visitnumber, v.confirmation, v.visitdate, v.visitor
      FROM visitation AS v
      INNER JOIN shelterencode AS s ON v.petid = s.id 
      WHERE s.id = ?;
    `;
  
    // Execute the query
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error retrieving visits data' });
      }
      return res.json(results);
    });
  };


module.exports = { getDogs, getCats, getPet, deletePet, addVisit, getVisits }