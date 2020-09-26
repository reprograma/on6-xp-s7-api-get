const express = require("express")
const router = express.Router()
const controller = require("../controller/filmesController")

router.get("/tudo", controller.getAll)
router.get("/:title", controller.getByTitle)

module.exports =  router 