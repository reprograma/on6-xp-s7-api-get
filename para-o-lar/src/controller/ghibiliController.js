//chamar e listar o json filmes.json

const ghibili = require ("../models/ghibli.json")

const getAll = (request,response) => {
    console.log(request.url)
    response.status(200).send(ghibili)
}

module.exports = {
    getAll
}