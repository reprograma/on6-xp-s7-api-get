const express = require("express")
const router = express.Router()
const controller = require("../controller/ghibliController")

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.get("/:filmGenre/buscar", controller.getByGenre)
router.get("/:filmTitle/search", controller.getByTitle)

module.exports = router