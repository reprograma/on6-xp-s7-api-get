const { request, response } = require("../app")
const dataBase = require("../models/colors-rgb.json")

//Retorna todos os estados
const getAll = (request, response) => {
    response.status(200).send(dataBase)
}

module.exports = {
    getAll
}