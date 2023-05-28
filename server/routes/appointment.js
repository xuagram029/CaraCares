const express = require('express')
const { getAppointments, acceptAppointment } = require('../controllers/appointmentController')
const router = express.Router()

router.route('/')
    .get(getAppointments)

router.route('/:id')
    .put(acceptAppointment)

module.exports = router