const express = require("express")
const router = express.Router()
const controller = require("../controller/colors-rgbController")

router.get("/", controller.getAll)

module.exports =  router 