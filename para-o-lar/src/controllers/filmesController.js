const filmes = require ("../models/filmes.json")
const { request, response } = require("express")

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(filmes)
}

const getByTitle = (request, response) => {
    const title = request.params.title

    const filmeEncontrado = filmes.find(filme => filme.Title.toLowerCase() == title.toLowerCase())

    if(filmeEncontrado) {
        return response.status(200).send(filmeEncontrado)
    } else {
        return response.status(404).send("Titulo não encontrado")
    }
}


const getByYear = (request, response) => {
    const year = request.params.year

    const filmeEncontrado = filmes.find(filme => filme.Year == year)

    if(filmeEncontrado) {
        return response.status(200).send(filmeEncontrado)
    } else {
        return response.status(404).send(`Não foram encontrados filmes do ano de ${year}`)
    }
  
}

const getByDirector = (request, response) =>{
    const director = request.params.director
    
    const filmeEncontrado = filmes.find(filme => filme.Director.toLowerCase() == director.toLowerCase())

    if(filmeEncontrado) {
        return response.status(200).send(filmeEncontrado)
    } else {
        return response.status(404).send(`Não foram encontrados filmes do diretor ${director}`)
    }
}


module.exports = {
    getAll,
    getByTitle,
    getByYear,
    getByDirector


}