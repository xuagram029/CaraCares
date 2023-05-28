const express = require('express')
const router = express.Router()
<<<<<<< HEAD
const {getDogs, getCats, getPet, deletePet, addVisit, getVisits, editVisit, getVisit} = require('../controllers/petTypeController')
=======
const {getDog, getCat} = require('../controllers/petTypeController')
>>>>>>> parent of 556bb1f (updated)

router.route('/dog')
    .get(getDog)

<<<<<<< HEAD
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
=======
router.route('/cat')
    .get(getCat)
>>>>>>> parent of 556bb1f (updated)

module.exports = router;