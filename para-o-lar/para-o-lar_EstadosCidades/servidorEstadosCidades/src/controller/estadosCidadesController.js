const estadosCidades = require("../model/estados-cidades.json")

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(estadosCidades)
}

module.exports = {
    getAll
}