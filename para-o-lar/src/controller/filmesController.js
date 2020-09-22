//chamar e listar o json filmes.json

const filmes = require ("../models/filmes.json")

const getAll = (request,response) => {
    console.log(request.url)
    response.status(200).send(filmes)
}

module.exports = {
    getAll
}