const express = require("express")
const router = express.Router()
const controller = require("../controllers/estados-cidades-Controller")

router.get("/", controller.getAll)
router.get("/:siglaEstados/buscar", controller.getBySigla)
router.get("/:nomeEstados/buscar", controller.getByNome)
router.get("/:cidadeEstados/buscar", controller.getBycidade)


module.exports = router