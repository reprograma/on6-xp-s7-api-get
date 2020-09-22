const express = require("express") //chamando o express
const router = express.Router()
const controller = require("../controller/colorsController") //chamar a colorController

// chamando a função getAll dentro da colorController
router.get("/", controller.getAll) // PS: deixar apenas /

//exportar a rota
module.exports = router 