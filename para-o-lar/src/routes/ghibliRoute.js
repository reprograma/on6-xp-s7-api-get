const express = require("express")
const router = express.Router()
const controller = require("../controller/ghibliController")

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.get("/genero/:filmGenre", controller.getByGenre)
router.get("/titulo/:filmTitle", controller.getByTitle)

module.exports = router