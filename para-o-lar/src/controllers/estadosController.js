const estados = require("../models/estados-cidades.json")

const getAll =  (request, response) => {
    console.log(request.url)
    response.status(200).send(estados)
}

const getByName= (request,response) => {
    const nome = request.params.nome
    response.status(200).send(estados.filter(estados => estados.nome == nome))
}


module.exports = {
    getAll,
    getByName
}