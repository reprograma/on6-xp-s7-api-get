const express = require("express")
const router = express.Router()
const controller = require("../controller/filmesController")

router.get("/", controller.getAll)
router.get("/:directorFilm/buscar", controller.getByDirector)
router.get("/:genreFilm/procurar", controller.getGenre)
// router.get("/:id", controller.getById) // a rota que nós temos mais o id que o usauário coloca
// router.get("/buscar/:nome", controller.getByNome)

module.exports = router 