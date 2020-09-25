const express = require("express")
const router = express.Router()
const controller = require("../controller/colorsController")
router.get("/", controller.getAll)

module.exports =  router