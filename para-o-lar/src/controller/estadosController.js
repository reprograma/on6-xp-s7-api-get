const { request, response } = require("../app")
const estados = require("../models/estados-cidades.json")

//Retorna todos os estados
const getAll = (request, response) => {
    response.status(200).send(estados)
}

//Retorna um estado pela sigla e todas as suas cidades
const getEstate = (request, response) => {
    const estate = request.params.estate
    const searchEstate = estados.find(item => estate.toUpperCase() == item.sigla)

    if(!searchEstate) {
        return response.status(400).send('Estado não encontrado.')
    }
    return response.status(200).send(searchEstate)
}

module.exports = {
    getAll,
    getEstate
}