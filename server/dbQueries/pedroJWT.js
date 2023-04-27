const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser') // 
const cookieParser = require('cookie-parser') // 
const session = require('express-session') //
const bcrypt = require('bcrypt') // 
const saltRounds = 10 //

const jwt = require('jsonwebtoken') //
const app = express()
app.use(cors())
app.use(express.json()) 
app.use(cookieParser()) // 
app.use(bodyParser.urlencoded({ extended: true }))//

app.use(
    session({
        key: 'userId',
        secret: 'secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24
        }
    })
)

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"test",
})

app.get('/', (req, res) => {
    console.log('HELLO WORLD')
})

// app.post('/register', (req, res) => {
//     const q = 'INSERT INTO user (`username`, `password` ) VALUES(?)'

//     const values = [
//         req.body.username,
//         req.body.password,
//     ]
//     db.query(q, [values], (err, data) => {
//         if(err) return res.json(err)
//         return res.json(data)
//     })
// })

app.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if(err){
            console.log(err)
        }

        db.query(
            "INSERT INTO users (username, password) VALUES (?, ?)",
            [username, hash],
            (err, data) => {
                console.log(err)
            }
        )
    })
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query(
        "SELECT * FROM users WHERE username = ?",
        username,
        (err, data) => {
            if(err){
                res.send({ err: err })
            }
            if(data.length > 0){
                bcrypt.compare(password, data[0].password, (err, res) => {
                    if(res){
                        req.session.user = data
                        const id = data[0].id
                        const token = jwt.sign({id, })
                        console.log(req.session.user)
                        res.send(data)
                    }else{
                        res.send({ message: 'WRONG USERNAME / PASSWORD COMBINATION'})
                    }
                })
            }else{
                res.send({ message: 'user does not exist'})
            }            
        }
    )
})


app.listen(8000, () => {
    console.log('Connected To Back-End')
})