const express = require("express")
const router = express.Router()
const controller = require("../controllers/estadosController")


router.get("/", controller.getAll)
router.get("/:nome/search", controller.getByName)

module.exports = router