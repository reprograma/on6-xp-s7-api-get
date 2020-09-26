const { request, response } = require("../app")
const dataBase = require("../models/estados-cidades-copy.json")

//Retorna todos os estados
const getAll = (request, response) => {
    response.status(200).send(dataBase.estados)
}

//Retorna um estado pela sigla e todas as suas cidades
const getState = (request, response) => {
    const state = request.params.state
    const searchState = dataBase.estados.find(item => state.toUpperCase() == item.sigla)

    if(!searchState) {
        return response.status(400).send('Estado não encontrado.')
    }
    return response.status(200).send(searchState)
}

//Retorna os estados que contenham determinada palavra inclusa em seu nome
const getStateByName = (request, response) => {
    const state = request.params.state
    const searchState = dataBase.estados.filter(item => item.nome.toLowerCase().includes(state))

    if(searchState == false) {
        return response.status(400).send('Estado não encontrado.')
    }
    return response.status(200).send(searchState)
}

module.exports = {
    getAll,
    getState,
    getStateByName
}