const ghibli = require("../models/ghibli.json");

const getAllGhibli = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: ghibli,
  });
};

module.exports = getAllGhibli;
