const { request, response } = require("../app")
const dataBase = require("../models/estados-cidades.json")

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

//Tentativa de retornar uma cidade de qualquer estado. Ainda não está funcionando
const getCity = (request, response) => {
    const city = request.params.city
    const searchCity = dataBase.estados.forEach((item) => {
        return item.cidades.filter(item => item.toLowerCase().includes(city))
    })

    if(searchCity == false) {
        return response.status(400).send('Cidade não encontrada.')
    }
    return response.status(200).send(searchCity)
}

module.exports = {
    getAll,
    getState,
    getStateByName,
    getCity
}