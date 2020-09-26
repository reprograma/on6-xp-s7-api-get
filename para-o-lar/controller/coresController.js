const cores = require("../models/colors-rgb.json") //acessando a pasta models

const getAll = (request, response) => {
    console.log(request.url) //url está chamando o caminho da pasta percorrida
    response.status(200).send(cores) //quando solicitado o getAll enviamos a resposta 200
}

module.exports = {
    getAll //poderiamos ter chamado essa função com qualquer outro nome
}