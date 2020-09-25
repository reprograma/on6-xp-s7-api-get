const express = require("express")
const router = express.Router()
const controller = require("../controllers/estadosController")


router.get("/", controller.getAll)
router.get("/:nome/search", controller.getByName)
router.get("/search/:initial", controller.getByInitial)
//router.get("/:city/buscar", controller.getByCity)

module.exports = router