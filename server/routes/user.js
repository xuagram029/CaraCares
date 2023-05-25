const express = require('express')
const router = express.Router()
const { getUsers, handleNewUser, getUser, updateUser, verifyUsers, deleteUser, login, logout } = require('../controllers/userController')
const { verifyAdmin, verifyUser } = require('../middleware/verifyToken')

router.route('/')
    .get(getUsers)
    .post(handleNewUser)

router.route('/login')
    .post(login)

router.route('/logout')
    .post(logout)

router.route('/:id')
    .get(getUser)
    .put(verifyUsers)
    .delete(deleteUser)

router.route('/update/:id')
    .put(updateUser)

module.exports = router