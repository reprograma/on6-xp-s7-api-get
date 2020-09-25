const express = require("express")
const router = express.Router()
const controller = require("../controller/ghibliController")

router.get("/", controller.getAll)
router.get("/:id", controller.getById) // a rota que nós temos  barra o id que o usuario coloca
router.get("/:generoFilme/buscar", controller.getByGenero) // quando for string tem que especificar melhor

module.exports =  router 


// é onde colocamos os verbos get,push,delete etc
// titleize(text) >> pesquisar isso para deixar o texto ajustado

