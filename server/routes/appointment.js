const express = require('express')
const { getAppointments, acceptAppointment, makeAppointment, getPendingAppointments, rejectAppointment } = require('../controllers/appointmentController')
const router = express.Router()

router.route('/')
    .get(getAppointments)
    .post(makeAppointment)

router.route('/pendings')
    .get(getPendingAppointments)

router.route('/:id')
    .put(acceptAppointment)
    .delete(rejectAppointment)

module.exports = router