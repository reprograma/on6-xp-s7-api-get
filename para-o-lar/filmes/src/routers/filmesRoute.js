//códigos de rota

const express = require("express")

const router = express.Router()

const controller = require("../controller/filmesController")

router.get("/filmes", controller.getAll)

module.exports = router