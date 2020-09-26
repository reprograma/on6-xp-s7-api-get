const express = require("express")
const router = express.Router()
const controller = require("../controller/estados-cidades")

router.get("/", controller.getAll)

module.exports =  router 