const express = require("express")
const router = express.Router()
const controller = require("../controller/colors-rbg")

router.get("/", controller.getAll)
router.get("/:numero", controller.getArray)

module.exports = router