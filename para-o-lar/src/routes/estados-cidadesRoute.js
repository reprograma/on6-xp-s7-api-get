const express = require("express")
const router = express.Router()
const controller = require("../controller/estados-cidadesController")

router.get("/", controller.getAll)

module.exports = router 