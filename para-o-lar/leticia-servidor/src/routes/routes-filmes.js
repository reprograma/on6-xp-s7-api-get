const express = require("express")
const router = express.Router()
const controller = require("../controller/controller-filmes")

router.get("/", controller.getAll)


module.exports = router