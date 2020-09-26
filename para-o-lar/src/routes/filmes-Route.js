const express = require("express")
const router = express.Router()
const controller = require("../controllers/filmesController")

router.get("/", controller.getAll)
router.get("/:titleFilmes", controller.getByTitle)
router.get("/:anoFilmes/buscar", controller.getByYear)

module.exports = router