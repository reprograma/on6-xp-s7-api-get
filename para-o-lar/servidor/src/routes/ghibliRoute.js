//Realizando a rota
const express = require("express")
const router = express.Router()
const controller = require('../controller/ghibliController')

router.get('/', controller.getAll)


module.exports = router
