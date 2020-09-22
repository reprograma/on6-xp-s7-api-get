//chamar e listar o json color-fgb.json

const colors = require("../models/colors-rgb.json") //trazendo o conteudo de color-rgb.json

const getAll = (request, response) => {
    console.log(request.url) // exibir no terminal a url que vai chegar na requisição
    response.status(200).send(colors) //quando alguém chamar a função getAll mandarei uma função com o status 200 e o colors (color-rgb.json)
}


//faz com que consigamos exportar a função getAll para ser usada em outro arquivo
module.exports = {
    getAll //função com o nome de getAll para trazer tudo o que tem dentro de colors (color-rgb.json)
} 

