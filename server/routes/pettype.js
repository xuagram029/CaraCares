const express = require('express')
const router = express.Router()
const {getDogs, getCats, getPet, deletePet, addVisit, getVisits} = require('../controllers/petTypeController')

router.route('/')
    .delete(deletePet)
    
router.route('/dogs')
    .get(getDogs)

router.route('/cats')
    .get(getCats)
    
router.route('/visits/:id')
    .get(getVisits)

router.route('/:id')
    .get(getPet)
    .post(addVisit)

module.exports = router;