const express = require('express')
const router = express.Router()
const {getVolunteers, addVolunteer} = require('../controllers/volunteerController')

router.route('/')
    .get(getVolunteers)
    .post(addVolunteer)

module.exports = router