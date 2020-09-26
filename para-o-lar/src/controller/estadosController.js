const { request, response } = require("../app")
const estados = require("../models/estados-cidades.json")

//Retorna todos os estados
const getAll = (request, response) => {
    response.status(200).send(estados)
}

//Retorna um estado pela sigla e todas as suas cidades
const getState = (request, response) => {
    const state = request.params.state
    const searchState = estados.find(item => state.toUpperCase() == item.sigla)

    if(!searchState) {
        return response.status(400).send('Estado não encontrado.')
    }
    return response.status(200).send(searchState)
}

module.exports = {
    getAll,
    getState
}