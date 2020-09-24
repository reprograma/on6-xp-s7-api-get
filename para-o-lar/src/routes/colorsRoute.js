const express = require('express')
const router = express.Router()
const controller = require('../controller/collorsController')

router.get('/', controller.getAll)

module.exports = router