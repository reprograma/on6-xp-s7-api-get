const cidades = require("../models/estados-cidades.json")

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(cidades)
}

module.exports = {
    getAll
}