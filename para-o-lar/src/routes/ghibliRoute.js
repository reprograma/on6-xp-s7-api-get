const express = require("express");
const router = express.Router();
const controller = require("../controller/ghibliController");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.get("/:generoFilme/buscar", controller.getByGenero);
router.get("/:titulo/titulo", controller.getByTitulo);

module.exports =  router; 