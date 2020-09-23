const express = require("express")
const router = express.Router()
const controller = require("../controllers/estados-cidadesController")

router.get("/", controller.getAll)

module.exports =  router 