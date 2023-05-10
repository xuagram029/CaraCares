const express = require('express')
const router = express.Router()
const  { regAdmin, login, logout} = require('../controllers/adminController')
const { verifyToken, verifyUser, verifyAdmin } = require('../middleware/verifyToken')


router.get('/checkauth', (req, res, next) => {
    res.send("u are logged in")
})

router.get('/user/:id', (req, res, next) => {
    res.send("u can delete")
})

router.get('/admin/:id', (req, res, next) => {
    res.send("u can delete all")
})

router.route('/')
    .post(regAdmin)

router.route('/login')
    .post(login)

router.route('/logout')
    .post(logout)

module.exports = router