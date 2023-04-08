const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"cara",
})

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    console.log('HELLO WORLD')
})

app.listen(8800, () => {
    console.log('Connected To Back-End')
})