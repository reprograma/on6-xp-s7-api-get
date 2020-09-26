const cores = require("../models/colors-rgb.json")

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(cores)
}

module.exports = {
    getAll
}