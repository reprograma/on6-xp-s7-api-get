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
    const searchFilm = filmes.filter(item => {
        const title = item.Title.toLowerCase();
        return title.includes(filmTitle)
    })

    if(!searchFilm) {
        return response.status(400).send('Filme não encontrado.')
    }
    return response.status(200).send(searchFilm)
}

module.exports = {
    getAll,
    getByTitle
}