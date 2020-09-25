const estados = require("../model/estados-cidades.json")

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(estados)
}

const getBySigla = (request, response) => {
    const sigla = request.params.sigla
    console.log(sigla)
    response.status(200).send(estados.find(estados => estados.sigla == sigla))
}

module.exports = {
    getAll,
    getBySigla
}