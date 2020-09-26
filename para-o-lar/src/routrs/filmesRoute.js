const express = require("express")
const router = express.Router()
const controller = require("../Controllers/filmeController")

router.get("/", controller.getAll)
router.get('/:title',controller.getByTitle)
reouter.get('/:director/buscar', controller.getByDiretor)


module.exports = router
