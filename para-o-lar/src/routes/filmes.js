const express = require('express')
const router = express.Router()
const controller = require ('../controler/filmesController')

router.get ("/", controller.getAll)

module.exports = router