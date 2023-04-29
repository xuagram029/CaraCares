const express = require('express')
const router = express.Router()
const { getUsers, postUser } = require('../controllers/usersController')
const ROLES_LIST = require('../config/roles_list')
const verifyRoles = require('../middleware/verifyRoles')

router.route('/')
    .get(getUsers)
    .post(postUser)

module.exports = router