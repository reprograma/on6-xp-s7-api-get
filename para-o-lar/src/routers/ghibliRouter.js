const express = require("express")

const router = express.Router() // faz as rotas

const controller = require("../controllers/ghibliController")

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.get("/:generoFilme/buscar", controller.getByGenero)

module.exports =  router 