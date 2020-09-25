const estados = require("../models/estados-cidades.json")

const getAll =  (request, response) => {
    console.log(request.url)
    response.status(200).send(estados)
}
module.exports = {
    getAll 
}