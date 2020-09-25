const filmes = require("../model/filmes.json")

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(filmes)
}

const getByTitle = (request, response) => {
    const titulo = request.params.titulo
    console.log(titulo)
    response.status(200).send(filmes.find(filmes => filmes.titulo == titulo))
}

module.exports = {
    getAll,
    getByTitle
}