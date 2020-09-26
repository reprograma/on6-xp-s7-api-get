const express = require("express")
const router = express.Router()
const controller = require("../controller/coresController.js")

router.get("/", controller.getAll)



module.exports =  router 