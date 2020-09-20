const express = require('express')
const router = express.Router()
const controller = require('../controller/estados-cidades-controller')

router.get('/', controller.getAll)

module.exports = router