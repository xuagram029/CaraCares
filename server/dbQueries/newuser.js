const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');


const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd) {
    return res.status(400).json({ 'message': 'Username and password are required.' });
  }
  try {
    const connection = await pool.getConnection();
    try {
      // Begin transaction
      await connection.beginTransaction();

      // check for duplicate usernames in the db
      const [rows, fields] = await connection.execute('SELECT * FROM users WHERE username = ?', [user]);
      if (rows.length > 0) {
        await connection.rollback();
        return res.sendStatus(409); //Conflict
      }

      //encrypt the password
      const hashedPwd = await bcrypt.hash(pwd, 10);

      //store the new user
      await connection.execute('INSERT INTO users (username, roles, password) VALUES (?, ?, ?)', [user, JSON.stringify({ User: 2001 }), hashedPwd]);

      // Commit transaction
      await connection.commit();

      res.status(201).json({ 'success': `New user ${user} created!` });
    } catch (err) {
      await connection.rollback();
      throw err;
    } finally {
      connection.release();
    }
  } catch (err) {
    res.status(500).json({ 'message': err.message });
  }
}

module.exports = { handleNewUser };
