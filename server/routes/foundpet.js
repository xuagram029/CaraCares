const express = require('express')
const router = express.Router()
const {addFoundPet, deleteFoundPet, getFoundPet, getFoundPets, updateFoundPets, adoptFoundPet, adoptedFoundPet, availFoundPet} = require('../controllers/foundPetsController')

router.route('/')
    .get(getFoundPets)
    .post(addFoundPet)
    
    
router.route('/adopted')
    .get(adoptedFoundPet)

router.route('/available')
    .get(availFoundPet)
    .put(adoptFoundPet)


router.route('/:id')
    .get(getFoundPet)
    .delete(deleteFoundPet)
    .put(updateFoundPets)

module.exports = router
