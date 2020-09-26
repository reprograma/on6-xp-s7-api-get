const express = require("express")
const router = express.Router()
const controller = require("../controller/estadosController")

router.get("/", controller.getAll)
router.get("/sigla/:state", controller.getState)
router.get("/nome/:state", controller.getStateByName)

module.exports = router