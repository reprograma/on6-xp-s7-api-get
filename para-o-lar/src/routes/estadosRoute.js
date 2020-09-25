const express = require("express");
const router = express.Router();
const controller = require("../controller/estadosController");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.get("/:sigla/sigla", controller.getBySigla);
router.get("/:nome/estado", controller.getByNomeEstado);

module.exports = router;