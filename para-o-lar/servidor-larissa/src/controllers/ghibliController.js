//criei uma variavel pra armazenar o json que está na pasta model
const ghibli = require("../models/ghibli.json")

//criando uma função para retornar todos os filmes
const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(ghibli)
}

//criando função para pesquisar filmes por título
const getByTitle = (request, response) => {
    const titleParam = request.params.title
    const filmTitle = ghibli.find(filme => filme.title == titleParam)
    console.log(filmTitle)
    
    if(!filmTitle){
        response.status(404).send({message: "Esse filme não existe."})
    } else {
        response.status(200).send(filmTitle)
    }
}

//exportando as funções

module.exports = {
    getAll,
    getByTitle
}