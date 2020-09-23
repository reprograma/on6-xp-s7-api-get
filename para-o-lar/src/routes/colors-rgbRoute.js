const express = require("express")
const router = express.Router()
const controller = require("../controllers/colors-rgbController")

router.get("/", controller.getAll)

module.exports = router