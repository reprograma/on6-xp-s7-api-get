const produtor = require("../models/ghibli.json")

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(produtor)
}

module.exports = {
    getAll
}