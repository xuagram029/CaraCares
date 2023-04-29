const express = require('express')
const router = express.Router()
const {addFoundPet, deleteFoundPet, getFoundPet, getFoundPets} = require('../controllers/foundPetsController')

router.route('/')
    .get(getFoundPets)
    .post(addFoundPet)

    
router.route('/:id')
    .get(getFoundPet)
    .delete(deleteFoundPet)

module.exports = router
