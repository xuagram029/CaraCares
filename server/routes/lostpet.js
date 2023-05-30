const express = require('express')
const router = express.Router()
const {addLostPet, deleteLostPet, getLostPet, getLostPets, updateLostPets, getLostPetsFront} = require('../controllers/lostPetsController')


router.route('/')
    .get(getLostPets)
    .post(addLostPet)

router.route('/front')
    .get(getLostPetsFront)

    
router.route('/:id')
    .get(getLostPet)
    .delete(deleteLostPet)
    .put(updateLostPets)
    
module.exports = router
