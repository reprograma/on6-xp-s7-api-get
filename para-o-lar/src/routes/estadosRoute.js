
const express = require("express")
const router = express.Router()
const controller = require("../controller/estadosController")

router.get("/", controller.getAll)

module.exports = router