const express = require('express')
const router = express.Router()
const {getDogs, getCats, getPet, deletePet, addVisit, getVisits, editVisit, getVisit} = require('../controllers/petTypeController')

router.route('/')
    .delete(deletePet)

router.route('/dogs')
    .get(getDogs)

router.route('/cats')
    .get(getCats)

router.route('/visits/:id')
    .get(getVisits)

router.route('/visit/:id')
    .get(getVisit)

router.route('/:id')
    .get(getPet)
    .post(addVisit)
    .put(editVisit)

module.exports = router;