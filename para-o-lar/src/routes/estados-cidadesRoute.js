const express = require("express") //chamando o express
const router = express.Router()
const controller = require ("../controller/estados-cidadesController")

// chamando a função getAll dentro da estados-cidadesController
router.get("/", controller.getAll) // PS: deixar apenas /

//exportar a rota
module.exports = router 