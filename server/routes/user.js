const express = require('express')
const router = express.Router()
const { getUsers, handleNewUser, getUser, updateUser, verifyUsers } = require('../controllers/userController')
const { verifyAdmin, verifyUser } = require('../middleware/verifyToken')

router.route('/')
    .get(getUsers)
    .post(handleNewUser)

router.route('/:id')
    .get(verifyAdmin ,getUser)
    .put(verifyAdmin, verifyUsers)

router.route('/update/:id')
    .put(verifyUser, verifyAdmin, updateUser)

module.exports = router