const express = require('express')
const router = express.Router()
const {addFoundPet, deleteFoundPet, getFoundPet, getFoundPets, updateFoundPets, adoptFoundPet, adoptedFoundPet, availFoundPet, getFoundPetsFront, getAcceptedPets, getPendingPets, acceptReport, deleteReport} = require('../controllers/foundPetsController')
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

router.route('/accepted')
    .get(getAcceptedPets)

router.route('/pending')
    .get(getPendingPets)
    .put(acceptReport)

router.route('/pending/:id')
    .put(acceptReport)
    .delete(deleteReport)

router.route('/adopt/:id')
    .put(adoptFoundPet)

router.route('/:id')
    .get(getFoundPet)
    .delete(deleteFoundPet)
    .put(updateFoundPets)

module.exports = router