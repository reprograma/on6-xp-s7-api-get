//criei uma variavel pra armazenar o json que está na pasta model
const ghibli = require("../models/ghibli.json")

//criando uma função para retornar todos os filmes
const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(ghibli)
}

//exportando a função getAll 

module.exports = {
    getAll
}