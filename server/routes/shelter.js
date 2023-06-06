const express = require('express')
const router = express.Router()
const  { getShelter, login, logout, regShelter, updateShelter, getAllShelter, deleteShelter} = require('../controllers/shelterController')
// const { verifyToken, verifyUser, verifyAdmin } = require('../middleware/verifyToken')

router.route('/')
    .get(getAllShelter)
    .post(regShelter)

router.route('/login')
    .post(login)

router.route('/logout')
    .post(logout)

router.route('/:id')
    .get(getShelter)
    .put(updateShelter)
    .delete(deleteShelter)

module.exports = router