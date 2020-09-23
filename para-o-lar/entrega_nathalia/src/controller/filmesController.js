const filmes = require("../model/filmes.json")

const getAll = (request, response) => {
    response.status(200).send(filmes)
}

module.exports = {
    getAll
}