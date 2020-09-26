const { request, response } = require("../app")
const filmes = require("../models/filmes.json")

//Para retornar todos os filmes
const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(filmes)
}

//Para retornar filmes por título
const getByTitle = (request, response) => {
    const filmTitle = request.params.filmTitle
    const searchFilm = filmes.filter(item => item.Title.toLowerCase().includes(filmTitle))

    if(!searchFilm) {
        return response.status(400).send('Filme não encontrado.')
    }
    return response.status(200).send(searchFilm)
}

//Retornar filmes por ano
const getByYear = (request, response) => {
    const year = request.params.year
    const searchByYear = filmes.filter(item => item.Year == year)

    if(!searchByYear) {
        return response.status(400).send(`Não há títulos lançados no ano de ${year}.`)
    }
    return response.status(200).send(searchByYear)
}

//Filmes por gênero
const getByGenre = (request, response) => {
    const filmGenre = request.params.filmGenre
    const searchByGenre = filmes.filter(item => item.Genre.toLowerCase().includes(filmGenre))

    if(!searchByGenre) {
        return response.status(400).send('Gênero não encontrado.')
    }
    return response.status(200).send(searchByGenre)
}


module.exports = {
    getAll,
    getByTitle,
    getByYear,
    getByGenre
}