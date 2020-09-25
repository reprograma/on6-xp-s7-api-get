//códigos de rota

const express = require("express")

const router = express.Router()

const controller = require("../controllers/filmesController")

router.get("/", controller.getAll)
router.get("/:year", controller.getByYear)

module.exports = router