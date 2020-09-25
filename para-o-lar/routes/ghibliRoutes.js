const express = require("express");
const router = express.Router();

const getAllGhibli = require("../controllers/ghibliController");

router.route("/ghibli").get(getAllGhibli);

module.exports = router;
