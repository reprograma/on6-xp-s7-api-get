const express = require("express")
const router = express.Router()
const controller = require("../controller/estados-cidades")

router.get("/", controller.getAll)
router.get("/:sigla", controller.getSiglas)

module.exports = router 