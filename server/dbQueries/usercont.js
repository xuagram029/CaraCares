const db = require('../db')

const getAllEmployees = (req, res) => {
  const query = 'SELECT * FROM employees';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

const createNewEmployee = (req, res) => {
  const { firstname, lastname } = req.body;
  if (!firstname || !lastname) {
    return res.status(400).json({ 'message': 'First and last names are required.' });
  }
  const query = 'INSERT INTO employees SET ?';
  const employee = { firstname, lastname };
  db.query(query, employee, (err, result) => {
    if (err) throw err;
    res.status(201).json({ id: result.insertId, ...employee });
  });
};

const updateEmployee = (req, res) => {
  const { id, firstname, lastname } = req.body;
  const query = 'UPDATE employees SET ? WHERE id = ?';
  db.query(query, [{ firstname, lastname }, id], (err, result) => {
    if (err) throw err;
    if (result.affectedRows === 0) {
      return res.status(400).json({ 'message': `Employee ID ${id} not found` });
    }
    res.json({ id, firstname, lastname });
  });
};

const deleteEmployee = (req, res) => {
  const { id } = req.body;
  const query = 'DELETE FROM employees WHERE id = ?';
  db.query(query, id, (err, result) => {
    if (err) throw err;
    if (result.affectedRows === 0) {
      return res.status(400).json({ 'message': `Employee ID ${id} not found` });
    }
    res.json({ 'message': `Employee ID ${id} deleted successfully` });
  });
};

const getEmployee = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM employees WHERE id = ?';
  db.query(query, id, (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      return res.status(400).json({ 'message': `Employee ID ${id} not found` });
    }
    res.json(result[0]);
  });
};

module.exports = {
  getAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee
};
