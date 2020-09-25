const express = require("express");
const router = express.Router();
const controller = require("../controller/filmesController");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.get("/:Year/ano", controller.getByAno);
router.get("/:Title/titulo", controller.getByTitulo);
router.get("/:Director/diretor", controller.getByDiretor);

module.exports = router;