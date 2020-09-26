const express = require("express")
const router = express.Router()
const controller = require("../controller/filmesController")

router.get("/", controller.getAll)
router.get("/titulo/:filmTitle", controller.getByTitle)
router.get("/ano/:year", controller.getByYear)
router.get("/genero/:filmGenre", controller.getByGenre)

module.exports = router