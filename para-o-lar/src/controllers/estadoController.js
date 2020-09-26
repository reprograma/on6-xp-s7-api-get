const dados = require ("../models/estados-cidades.json")
const { request, response } = require("express")


const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(dados.estados)
}


const getBySigla = (request, response) => {
    const sigla = request.params.sigla
    
    const estadoEncontrado = dados.estados.find(estado => estado.sigla == sigla)
    
    if(estadoEncontrado) {
        return response.status(200).send(estadoEncontrado)
    } else {
        return response.status(404).send(`Estado não encontrado`)

    }

}


const getCidades = (request, response) => {
    const sigla = request.params.sigla
    
    const estadoEncontrado = dados.estados.find(estado => estado.sigla == sigla)
    
    if(estadoEncontrado) {
        return response.status(200).send(estadoEncontrado.cidades)
    } else {
        return response.status(404).send(`Estado não encontrado`)

    }


    
}



module.exports = {
    getAll,
    getBySigla,
    getCidades,
    
}