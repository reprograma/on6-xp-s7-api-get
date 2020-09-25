const filmes = require("../models/filmes.json");

const getAllFilmes = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: filmes,
  });
};

module.exports = getAllFilmes;
