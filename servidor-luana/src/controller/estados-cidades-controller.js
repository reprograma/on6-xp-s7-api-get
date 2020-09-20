const estados_cidades = require('../model/estados-cidades.json')

const getAll = (request, response) => response.status(200).send(estados_cidades)

module.exports = {
    getAll
}