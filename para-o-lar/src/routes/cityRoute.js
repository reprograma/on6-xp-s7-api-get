const express = require('express')
const router = express.Router()
const controller = require('../controller/cityController')

router.get('/', controller.getAll)

module.exports = router