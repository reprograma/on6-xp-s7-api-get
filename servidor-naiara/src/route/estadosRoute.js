const express = require("express")
const router = express.Router()
const controller = require("../controller/estadosController")

router.get("/", controller.getAll)
router.get("/:id", controller.getById) // a rota que nós temos mais o id que o usauário coloca
router.get("/:nome/buscar", controller.getByNome)
router.get("/:sigla/encontrar", controller.getBySigla)

module.exports = router 