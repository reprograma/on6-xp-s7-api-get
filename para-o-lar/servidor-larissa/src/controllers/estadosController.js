const estados = require("../models/estados-cidades.json")

const getAll = (request, response) => {
    response.status(200).send(estados)
}

const getByName = (request, response) => {
    const estadoName = request.params.nome
    const estado = estados.estados.find(estados => estados.nome == estadoName)

    if(!estado){
        response.status(404).send({message: "Estado não encontrado"})
    }else{
        response.status(200).send(estado)
    }
}

module.exports = {
    getAll,
    getByName
}