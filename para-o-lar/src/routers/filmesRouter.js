const express = require("express")
const router = express.Router()
const controller = require("../controllers/filmesController")

router.get("/", controller.getAll)
router.get("/:title", controller.getByTitle)
router.get("/:year/buscar", controller.getByYear)
router.get("/:director/encontre", controller.getByDirector)



module.exports = router