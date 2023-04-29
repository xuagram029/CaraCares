const express = require('express')
const router = express.Router()
const{getEncodedPet, getEncodedPets, addEncodedPet, deleteEncodedPet} = require('../controllers/shelterEncodeController')

router.route('/')
    .get(getEncodedPets)
    .post(addEncodedPet)

router.route('/:id')
    .get(getEncodedPet)
    .delete(deleteEncodedPet)


module.exports = router