const express = require("express");
const router = express.Router();
const controller = require("../controller/colorsController");

router.get("/", controller.getAll);
router.get("/:cores", controller.getByCores);

module.exports =  router; 