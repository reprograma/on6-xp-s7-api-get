const filmesGhibli = require('../models/ghibli.json')

const getAll = (request, response) => { // Funcionando
    return response.status(200).send(filmesGhibli)
}

module.exports = {
    getAll
}