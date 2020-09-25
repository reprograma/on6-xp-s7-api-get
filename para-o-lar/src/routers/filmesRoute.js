//códigos de rota

const express = require("express")

const router = express.Router()

const controller = require("../controllers/filmesController")

router.get("/filmes", controller.getAll)

module.exports = router