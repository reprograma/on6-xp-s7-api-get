const { request, response } = require("../app")
const ghibli = require("../model/ghibli.json")

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(ghibli)
}

const getById = (request, response) => {
    const id = request.params.id
    if (id > 5 || id <= 0) {
        response.status(404).send("id nao encontrado")
    } else {
        response.status(200).send(ghibli.find(ghibli => ghibli.id == id))
    }
}

const getByGenero = (request, response) => {
    const generofilme = request.params.generofilme
    console.log(generofilme)
    response.status(200).send(ghibli.filter(ghibli=> ghibli.genero == generofilme))
}

module.exports = {
    getAll,
    getById,
    getByGenero
}