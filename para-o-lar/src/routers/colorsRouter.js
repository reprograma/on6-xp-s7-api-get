const express = require("express")
const router = express.Router()
const controller = require("../controllers/colorsController")

router.get("/", controller.getAll)
router.get("/:color", controller.getColor)

module.exports = router