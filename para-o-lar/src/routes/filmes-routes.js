const express = require("express")
const router = express.Router()
const controller = require("../controller/filmes.Controller")

router.get("/", controller.getAll)



module.exports =  router 