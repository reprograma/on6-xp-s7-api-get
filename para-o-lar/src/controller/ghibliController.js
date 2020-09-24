const filmesGhibli = require('../models/ghibli.json')

const getAll = (request, response) => {
    return response.status(200).send(filmesGhibli)
}

module.exports = {
    getAll
}