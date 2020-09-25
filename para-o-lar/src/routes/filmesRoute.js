const express = require('express')
const router = express.Router()
const controller = require('../controller/filmesController')

router.get('/', controller.getAll)
router.get('/:ano', controller.getByYear)

module.exports = router