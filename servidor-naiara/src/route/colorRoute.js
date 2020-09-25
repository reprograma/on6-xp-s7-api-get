const express = require("express")
const router = express.Router()
const controller = require("../controller/colorController")

router.get("/", controller.getAll)
router.get("/:color/busca",controller.getByCor)


module.exports = router 




