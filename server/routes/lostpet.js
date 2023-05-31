const express = require('express')
const router = express.Router()
const {addLostPet, deleteLostPet, getLostPet, getLostPets, updateLostPets, getLostPetsFront, getPendingPets, getAcceptedPets, acceptReport, deleteReport} = require('../controllers/lostPetsController')


router.route('/')
    .get(getLostPets)
    .post(addLostPet)

router.route('/front')
    .get(getLostPetsFront)

router.route('/pending')
    .get(getPendingPets)

router.route('/accepted')
    .get(getAcceptedPets)

router.route('/pending/:id')
    .put(acceptReport)
    .delete(deleteReport)

router.route('/:id')
    .get(getLostPet)
    .delete(deleteLostPet)
    .put(updateLostPets)
    
module.exports = router
