const { request, response } = require("../app")
const filmes = require("../models/filmes.json")

//Para retornar todos os filmes
const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(filmes)
}

//Para retornar filmes por título - digitar uma palavra que esteja contida no título
const getByTitle = (request, response) => {
    const filmTitle = request.params.filmTitle
    const searchFilm = filmes.filter(item => item.Title.toLowerCase().includes(filmTitle))

    if(searchFilm == false) {
        return response.status(400).send('Título não encontrado.')
    }
    return response.status(200).send(searchFilm)
}

//Retornar filmes por ano
const getByYear = (request, response) => {
    const year = request.params.year
    const searchByYear = filmes.filter(item => item.Year == year)

    if(searchByYear == false) {
        return response.status(400).send(`Não há títulos lançados no ano de ${year}.`)
    }
    return response.status(200).send(searchByYear)
}

//Filmes por gênero
const getByGenre = (request, response) => {
    const filmGenre = request.params.filmGenre
    const searchByGenre = filmes.filter(item => item.Genre.toLowerCase().includes(filmGenre))

    if(searchByGenre == false) {
        return response.status(400).send('Gênero não encontrado.')
    }
    return response.status(200).send(searchByGenre)
}

//Filmes por nome do diretor - digitar só uma palavra que faça parte do nome do diretor
const getByDirector = (request, response) => {
    const director = request.params.director
    const searchByDirector = filmes.filter(item => item.Director.toLowerCase().includes(director))

    if(searchByDirector == false) {
        return response.status(400).send('Diretor não encontrado.')
    }
    return response.status(200).send(searchByDirector)
}

//Filmes por nome do roteirista - digitar só uma palavra contida no nome do roteirista
const getByWriter = (request, response) => {
    const writer = request.params.writer
    const searchByWriter = filmes.filter(item => item.Writer.toLowerCase().includes(writer))

    if(searchByWriter == false) {
        return response.status(400).send('Roteirista não encontrado.')
    }
    return response.status(200).send(searchByWriter)
}


module.exports = {
    getAll,
    getByTitle,
    getByYear,
    getByGenre,
    getByDirector,
    getByWriter
}