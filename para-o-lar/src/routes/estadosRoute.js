const express = require('express')
const router = express.Router()
const controller = require('../controller/estadosController')

router.get('/', controller.getAll)
router.get('/:nomeEstado', controller.getByName)
router.get('/:sigla/buscar', controller.getBySigla)

module.exports = router
