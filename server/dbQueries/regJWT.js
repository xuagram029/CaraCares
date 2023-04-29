const express = require('express')
const app = express()

const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyJWT = require('./verifyJWT')

const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '1234',
    database: 'login'
})

// app.get('/employees', verifyJWT, require('./routes/api/employees'))
app.get('/employees', verifyJWT, (req, res) => { 
    db.query("SELECT * FROM users", (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    if(!username || !password){
        return res.status(400).json({ message: 'Username and password are required' });
    }
    db.query("SELECT * FROM users WHERE username = ? ", [username], (err, result) => {
        if(err) return res.json(err)

        if(result.length > 0){
            return res.status(409).json({ message: 'Username already taken' });
        }

        db.query(
            "INSERT INTO users(`username`, `password`) VALUES (?, ?)", 
            [username, password],
            (err, data) => {
                if(err) return res.json(err)
                return res.json(data)
            }
        )
    })

})

app.post('/login',  (req, res) => {
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
                if(userFromDb.password === pwd){
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
                            res.cookie('jwt', refreshToken, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000})
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
})

app.listen(3001, ()=> {
    console.log('connected to port 3001 and DB')
})
