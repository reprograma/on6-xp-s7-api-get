const express = require("express")
const router = express.Router()
const controller = require("../controller/filmesController")

router.get("/", controller.getAll)
router.get("/titulo/:filmTitle", controller.getByTitle)
router.get("/ano/:year", controller.getByYear)
router.get("/genero/:filmGenre", controller.getByGenre)
router.get("/diretor/:director", controller.getByDirector)
router.get("/roteirista/:writer", controller.getByWriter)
router.get("/ator/:actor", controller.getByActor)

module.exports = router