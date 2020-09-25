const express = require('express')
const router = express.Router()
const controller = require ('../controler/colors-rgbController')

router.get ("/", controller.getAll)

module.exports = router