const { request, response } = require("../app")
const estados = require("../models/estados-cidades.json")

//Retorna todos os estados
const getAll = (request, response) =>{
    response.status(200).send(estados)
}

module.exports = {
    getAll
}