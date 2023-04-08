const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()


app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"test",
})

app.get('/', (req, res) => {
    console.log('HELLO WORLD')
})

app.post('/register', (req, res) => {
    const q = 'INSERT INTO user (`username`, `password` ) VALUES(?)'

    const values = [
        req.body.username,
        req.body.password,
    ]
    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.listen(8000, () => {
    console.log('Connected To Back-End')
})