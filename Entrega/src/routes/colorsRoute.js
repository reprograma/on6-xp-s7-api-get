//constante que chama a lib express
const express = require("express")

//constante que referencia a lib com a função router
const router = express.Router()

//constante do caminho
const controller = require("../controller/colorsController")

//método 
router.get("/", controller.getAll)

module.exports = router
