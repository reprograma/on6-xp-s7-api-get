const express = require("express")
const router = express.Router()
const controller = require("../controllers/estadoController")

router.get("/", controller.getAll)
router.get("/:sigla", controller.getBySigla)
router.get("/:sigla/cidades", controller.getCidades)


module.exports = router