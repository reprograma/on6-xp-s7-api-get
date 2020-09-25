const colors = require("../models/colors-rgb.json");

const getAllColors = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: colors,
  });
};

module.exports = getAllColors;
