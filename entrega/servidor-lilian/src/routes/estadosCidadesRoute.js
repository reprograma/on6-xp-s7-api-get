const express = require("express")
const router = express.Router()
const controller = require("../controller/estadosCidadesController")

router.get("/", controller.getAll)

module.exports =  router 