const express = require("express") //chamando o express
const router = express.Router()
const controller = require ("../controller/filmes")


// chamando a função getAll dentro da colorController
router.get("/",controller.getAll)

module.exports = router