const express = require('express')
const router = express.Router()
const{getEncodedPet, getEncodedPets, addEncodedPet, deleteEncodedPet, updateshelterencodes, adoptFoundPet, availFoundPet, adoptedFoundPet, totalAdoption, updateOwner} = require('../controllers/shelterEncodeController')

router.route('/')
    .get(getEncodedPets)
    .post(addEncodedPet)

router.route('/adopted')
    .get(adoptedFoundPet)

router.route('/available')
    .get(availFoundPet)
    .put(adoptFoundPet)

router.route('/total')
    .get(totalAdoption)

router.route('/adopt/:id')
    .put(adoptFoundPet)

router.route('/:id')
    .get(getEncodedPet)
    .delete(deleteEncodedPet)
    .put(updateOwner)


module.exports = router