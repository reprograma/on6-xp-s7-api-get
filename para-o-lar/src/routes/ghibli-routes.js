const express = require("express")
const router = express.Router()
const controller = require("../controller/ghibliController.js")

router.get("/", controller.getAll)



module.exports =  router 