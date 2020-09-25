const estadosCidades = require("../models/estados-cidades.json");

const getAllEstadosCidades = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: estadosCidades,
  });
};

module.exports = getAllEstadosCidades;
