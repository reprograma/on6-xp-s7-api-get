const estados = require("../model/estados.json")

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(estados)
}


module.exports = {
    getAll
    
}