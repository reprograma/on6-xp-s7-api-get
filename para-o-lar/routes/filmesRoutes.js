const express = require("express");
const router = express.Router();

const getAllFilmes = require("../controllers/filmesController");

router.route("/filmes").get(getAllFilmes);

module.exports = router;
