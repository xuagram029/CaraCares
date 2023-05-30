const express = require("express")
const { requestAdoption } = require("../controllers/adoptionController")
const router = express.Router()

router.route('/')
    .post(requestAdoption)

module.exports = router