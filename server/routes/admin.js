const express = require('express')
const router = express.Router()
const  { regAdmin, login, logout, getAdoptionRequests, handleAdoptionRequest} = require('../controllers/adminController')
const { verifyToken, verifyUser, verifyAdmin } = require('../middleware/verifyToken')


// router.get('/checkauth', verifyToken, (req, res, next) => {
//     res.send("u are logged in")
// })

// router.get('/user/:id', verifyUser, (req, res, next) => {
//     res.send("u can delete")
// })

// router.get('/admin/:id', verifyAdmin, (req, res, next) => {
//     res.send("u can delete all")
// })

router.route('/')
    .post(regAdmin)

router.route('/login')
    .post(login)

router.route('/logout')
    .post(logout)

router.route('/adoption')
    .get(getAdoptionRequests)
    // .post(handleAdoptionRequest)

router.route('/adoption/:id')
    .post(handleAdoptionRequest)

module.exports = router