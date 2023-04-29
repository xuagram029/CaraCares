const express = require('express')
const router = express.Router()
const {addLostPet, deleteLostPet, getLostPet, getLostPets} = require('../controllers/lostPetsController')


router.route('/')
    .get(getLostPets)
    .post(addLostPet)

    
router.route('/:id')
    .get(getLostPet)
    .delete(deleteLostPet)

module.exports = router
