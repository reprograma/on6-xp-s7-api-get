const express = require("express")
const router = express.Router()
const controller = require("../controller/ghibliController")

router.get("/", controller.getAll)
router.get("/:id" , controller.getById)
router.get("/:generofilme/buscar", controller.getByGenero)

module.exports =  router 