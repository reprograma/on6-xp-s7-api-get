const express = require("express")
const router = express.Router()
const controller = require("../controller/estadosController")

router.get("/", controller.getAll)
router.get("/:estate", controller.getAllCities)

module.exports = router