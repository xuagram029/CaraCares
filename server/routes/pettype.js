const express = require('express')
const router = express.Router()
const {getShelterPets, getDogs, getCats, getPet, deletePet, addVisit, getVisits} = require('../controllers/petTypeController')

router.route('/')
    .get(getShelterPets)
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