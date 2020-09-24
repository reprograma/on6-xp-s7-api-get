const { request, response } = require("express")
//variável buscando pelo caminho das pastas
const colors = require("../model/colors-rgb.json")

//função para pegar as cores
const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(colors)
}

//exportando a função
module.exports = {
    getAll
}

