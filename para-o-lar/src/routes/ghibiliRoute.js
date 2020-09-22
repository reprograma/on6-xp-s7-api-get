const express = require("express") //chamando o express
const router = express.Router()
const controller = require("../controller/ghibiliController") //chamar a ghibiliController

// chamando a função getAll dentro da ghibiliController
router.get("/", controller.getAll) // PS: deixar apenas /

//exportar a rota
module.exports = router 