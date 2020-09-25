const express = require("express")
const router = express.Router()
const controller = require("../controller/filmesController")

router.get("/", controller.getAll)
router.get("/:titleFilme/buscar", controller.getTitlesFilmes)
router.get("/:generoFilme/buscar", controller.getByGenero)


module.exports = router