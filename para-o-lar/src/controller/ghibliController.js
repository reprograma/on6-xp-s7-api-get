const { request, response } = require("../app")
const ghibli = require("../models/ghibli.json")

//Para retornar todos os filmes
const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(ghibli)
}

//Para retornar apenas 1 filmes, selecionado pelo id
const getById = (request, response) => {
    const id = request.params.id
    const idRequested = ghibli.find(item => item.id == id)

    if(!idRequested) {
        return response.status(400).send('Filme não encontrado.')
    }
    return response.status(200).send(idRequested)
}

//Para retornar filmes por gênero
const getByGenre = (request, response) => {
    const filmGenre = request.params.filmeGenre
    const genreCapitalized = filmGenre.charAt(0).toUpperCase() + filmGenre.slice(1)
    const genreRequested = ghibli.filter(item => item.genero == genreCapitalized)

    if(!genreRequested) {
        return response.status(400).send('Gênero não encontrado.')
    }
    return response.status(200).send(genreRequested)
}

module.exports = {
    getAll,
    getById,
    getByGenre
}