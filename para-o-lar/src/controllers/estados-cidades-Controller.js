const { request, response } = require("express")
const estados = require("../models/estados-cidades.json")

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(estados-cidade)
}

const getBySigla = (request, response) =>{
    const siglaEstados = request.params.siglaEstados
    response.status(200).send(estados.filter(estados-cidade => estados.sigla == siglaEstados))
}

const getByNome = (request, response) =>{
    const nomeEstados = request.params.nomeEstados
    response.status(200).send(estados.filter(estados-cidade => estados.nome == nomeEstados))
}

const getBycidade = (request, response) =>{
    const cidadeEstados = request.params.cidadeEstados
    response.status(200).send(estados.filter(estados-cidade => estados.cidade == cidadeEstados))
}

module.exports = {
    getAll,
    getBySigla,
    getByNome,
    getBycidade
    
}