const express = require('express')
const router = express.Router()
const { getUsers, handleNewUser, verifyUser, getUser } = require('../controllers/userController')

router.route('/')
    .get(getUsers)
    .post(handleNewUser)

router.route('/:id')
    .get(getUser)
    .put(verifyUser)

module.exports = router