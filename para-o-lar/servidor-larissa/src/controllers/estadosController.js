const estados = require("../models/estados-cidades.json")

const getAll = (request, response) => {
    response.status(200).send(estados)
}

const getByName = (request, response) => {
    const estadoName = request.params.nome
    const estado = estados.estados.find(estados => estados.nome == estadoName)

    if(!estado){
        response.status(404).send({message: "Estado não encontrado."})
    }else{
        response.status(200).send(estado)
    }
}

const getByInitial = (request, response) => {
    const estadoParam = request.params.initial 
    const findEstado = estados.estados.find(estados => estados.sigla == estadoParam)

    if(!findEstado){
        response.status(404).send({message: "Essa sigla não existe."})
    } else {
        response.status(200).send(findEstado)
    }
}

/* Tentativa de pesquisar dentro de estados, uma só cidade. Não consegui.
    const getByCity = (request, response) => {
    const cityParam = request.params.city
    const city = estados.cidades[cityParam]

    const findCity = estados.estados.find(estados => estados.cidades == city)

    console.log(findCity)
    console.log(city)
    

     if (!city){
        response.status(400).send({message: 'Essa cor não existe :('})
    } else {
        response.status(200).send(city)
    } 
} */


module.exports = {
    getAll,
    getByName,
    getByInitial
    //getByCity
}