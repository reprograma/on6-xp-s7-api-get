
const express = require("express")
const router = express.Router()
const controller = require("../controllers/estadosCidadesController")

router.get("/", controller.getAll)
router.get("/:sigla", controller.getBySigla)


module.exports = router