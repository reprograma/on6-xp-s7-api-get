const express = require("express")

const router = express.Router()

const controller = require("../controllers/colorsController")

router.get("/colors", controller.getAll)

module.exports = router