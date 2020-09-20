const controller = require('../controller/colors-rgb-controller')
const express = require('express')
const router = express.Router()

router.get('/', controller.getAll)

module.exports = router