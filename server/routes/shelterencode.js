const express = require('express')
const router = express.Router()
const{getEncodedPet, getEncodedPets, addEncodedPet, deleteEncodedPet, updateshelterencodes} = require('../controllers/shelterEncodeController')

router.route('/')
    .get(getEncodedPets)
    .post(addEncodedPet)

router.route('/:id')
    .get(getEncodedPet)
    .delete(deleteEncodedPet)
    .put(updateshelterencodes)

module.exports = router