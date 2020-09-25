const express = require("express")
const router = express.Router()
const controller = require('../controller/estCidadesController.js')

router.get('/', controller.getAll)
router.get("/:siglaEstados",controller.getSigla )

module.exports = router