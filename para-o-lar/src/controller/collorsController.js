const cores = require('../models/colors-rgb.json')

const getAll = (request, response) => { // Funcionando
    return response.status(200).send(cores)
}

module.exports = {
    getAll
}