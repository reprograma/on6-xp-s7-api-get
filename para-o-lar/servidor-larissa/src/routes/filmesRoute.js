const express = require("express")
const router = express.Router()
const controller = require("../controllers/filmesController")


router.get("/", controller.getAll)
router.get("/:year/search", controller.getByYear)
router.get("/search/:director", controller.getByDirector)

module.exports = router