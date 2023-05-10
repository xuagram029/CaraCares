const express = require('express')
const router = express.Router()
const {addFoundPet, deleteFoundPet, getFoundPet, getFoundPets, updateFoundPets, adoptFoundPet, adoptedFoundPet, availFoundPet, getFoundPetsFront} = require('../controllers/foundPetsController')

router.route('/')
    .get(getFoundPets)
    .post(addFoundPet)
    
router.route('/front')
    .get(getFoundPetsFront)

router.route('/adopted')
    .get(adoptedFoundPet)

router.route('/available')
    .get(availFoundPet)
    .put(adoptFoundPet)

router.route('/:id')
    .get(getFoundPet)
    .delete(deleteFoundPet)
    .put(updateFoundPets)

router.route('/adopt/:id')
    .put(adoptFoundPet)




module.exports = router