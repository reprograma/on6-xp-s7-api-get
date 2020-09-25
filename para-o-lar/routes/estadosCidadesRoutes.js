const express = require("express");
const router = express.Router();

const getAllEstadosCidades = require("../controllers/estadosCidadeController");

router.route("/estados").get(getAllEstadosCidades);

module.exports = router;
