const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const verifyJWT = require('./middleware/verifyJWT')
const cookieParser = require('cookie-parser') // 
const credentials = require('./middleware/credentials')
const PORT = process.env.PORT || 8000

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

const jwt = require('jsonwebtoken') //
const db = require('./db')

require('dotenv').config()
app.use(cors())
app.use(express.json()) 
app.use(cookieParser()) // 
// app.use(bodyParser.urlencoded({ extended: true }))//
// middleware for cookies

// routes
app.use('/register', require('./routes/register'))
app.use('/login',  require('./routes/auth'))
app.use('/refresh',  require('./routes/refresh'))
app.use('/logout',  require('./routes/logout'))
app.use('/blogs', require('./routes/blogs'))
app.use('/foundpet', require('./routes/foundpet'))
app.use('/admin-encode', require('./routes/shelterencode'))

// app.use(verifyJWT)
app.use('/users', require('./routes/user'))

app.listen(PORT, () => {
    console.log(`Connected To back-end on port ${PORT}`)
})