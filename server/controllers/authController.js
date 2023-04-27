const db = require('../db')
const bcrypt = require('bcrypt') // 
const jwt = require('jsonwebtoken')
require('dotenv').config()

const handleLogin = (req, res) => {
    const {user, pwd} = req.body
    if(!user || !pwd){
        return res.status(400).json({ message: 'Username and password are required' });
    }
    db.query(
        "SELECT * FROM users WHERE username = ?", 
        user,
        (err, result) => {
            if(err) return res.json(err)

            if(result.length > 0){
                const userFromDb = result[0]
                // if(userFromDb.password === pwd){
                if (bcrypt.compareSync(pwd, userFromDb.password)) {
                    const accessToken = jwt.sign(
                        { "username": user },
                        process.env.ACCESS_TOKEN_SECRET,
                        { expiresIn: '30s'}
                      );
                      const refreshToken = jwt.sign(
                        { "username": user },
                        process.env.REFRESH_TOKEN_SECRET,
                        { expiresIn: '1d'}
                      );
                      db.query(
                        "UPDATE users SET refreshToken = ? WHERE id = ?",
                        [refreshToken, userFromDb.id],
                        (err, result) => {
                            if(err){
                                console.log(err)
                                return res.sendStatus(500)
                            }
                            res.cookie('jwt', refreshToken, {httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000})
                            res.json({ accessToken })
                        }
                      )
                }else{
                    return res.status(401).json({ message: 'Invalid credentials' });
                }

            }else{
                // User not found
                return res.status(401).json({ message: 'Invalid credentials' });
            }
        }

    )
}

module.exports = { handleLogin }