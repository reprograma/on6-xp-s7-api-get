const estados = require('../models/estados-cidades.json')

const getAll = (request, response) => {
    return response.status(200).send(estados)
}

module.exports = {
    getAll
}