const { request, response } = require("../app")
const ghibli = require("../models/ghibli.json")

//Para retornar todos os filmes
const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(ghibli)
}

//Para retornar apenas 1 filmes, selecionado pelo id
const getById = (request, response) => {
    const id = request.params.id
    const idRequested = ghibli.find(item => item.id == id)

    if(!idRequested) {
        return response.status(400).send({ message: 'Filme não encontrado.'})
    }
    return response.status(200).send(idRequested)
}

module.exports = {
    getAll,
    getById
}