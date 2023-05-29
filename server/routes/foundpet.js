const express = require('express')
const router = express.Router()
const {addFoundPet, deleteFoundPet, getFoundPet, getFoundPets, updateFoundPets, adoptFoundPet, adoptedFoundPet, availFoundPet, getFoundPetsFront} = require('../controllers/foundPetsController')
const { verifyAdmin } = require('../middleware/verifyToken')

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

router.route('/adopt/:id')
    .put(verifyAdmin, adoptFoundPet)

router.route('/:id')
    .get(getFoundPet)
    .delete(verifyAdmin, deleteFoundPet)
    .put(verifyAdmin, updateFoundPets)

module.exports = router
