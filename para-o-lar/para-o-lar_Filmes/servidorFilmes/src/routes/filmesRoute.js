const express = require("express")
const router = express.Router()
const controller = require("../controller/filmesControllers")

//Registrando nossos códigos de rotas da API
router.get("/", controller.getAll)

module.exports = router //Enviando a rota