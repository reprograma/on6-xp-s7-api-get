const express = require("express")
const router = express.Router()
const controller = require("../controller/cidadesController.js")

router.get("/", controller.getAll)



module.exports =  router 