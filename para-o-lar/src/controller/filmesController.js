const filmes = require('../models/filmes.json')

const getAll = (request, response) => {
    return response.status(200).send(filmes)
}
module.exports = {
    getAll
}