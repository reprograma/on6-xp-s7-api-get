const Ghibli = require("../models/ghibliController.json")

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(Ghibli)
}

module.exports = {
    getAll
}