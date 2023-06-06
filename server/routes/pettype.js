const express = require('express')
const router = express.Router()
const {getDogs, getCats, getPet, deletePet, addVisit, getVisits, editVisit, getVisit, getAdoptedCats, getAdoptedDogs} = require('../controllers/petTypeController')


router.route('/dogs')
    .get(getDogs)

router.route('/cats')
    .get(getCats)
    
router.route('/adopted-cats')
    .get(getAdoptedCats)

router.route('/adopted-dogs')
    .get(getAdoptedDogs)
    
router.route('/visits/:id')
    .get(getVisits)

router.route('/visit/:id')
    .get(getVisit)

router.route('/:id')
    .get(getPet)
    .post(addVisit)
    .put(editVisit)
    .delete(deletePet)


module.exports = router;