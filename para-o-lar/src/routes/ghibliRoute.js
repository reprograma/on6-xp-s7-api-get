const express = require("express")
const router = express.Router()
const controller = require("../controller/ghibliController")

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.get("/:filmeGenre/buscar", controller.getByGenre)

module.exports =  router