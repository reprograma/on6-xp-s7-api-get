//criei uma variável para armazenar o express pois precisarei do router
const express = require('express')
//criei uma variável para armazenar o router
const router = express.Router()
//criei uma variável para armazenar o controller onde exportei a função que eu vou precisar
const controller = require('../controllers/colorController')

//criei a rota usando a função que está em controller
router.get("/", controller.getAll)

//exportei a rota para usar no app usando module.exports
module.exports = router