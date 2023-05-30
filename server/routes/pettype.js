const express = require('express')
const router = express.Router()
const {getDog, getCat} = require('../controllers/petTypeController')

router.route('/dog')
    .get(getDog)

router.route('/cat')
    .get(getCat)

module.exports = router;