const express = require("express")

const router = express.Router()

const controller = require("../controllers/estadosController")

router.get("/", controller.getAll)

module.exports = router