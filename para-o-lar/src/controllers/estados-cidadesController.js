const estados_cidades = require("../models/estados-cidades.json")

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(estados_cidades)
}

module.exports = { getAll }