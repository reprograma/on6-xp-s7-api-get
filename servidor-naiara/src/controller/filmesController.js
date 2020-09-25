const movies =  require("../model/filmes.json")


const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(movies)
}

//director
const getByDirector = (request,response) => {
     const directorFilm = request.params.directorFilm

     const diretor = movies.find(movie => movie.Director == directorFilm)
    
    console.log(directorFilm)

    if(!diretor){
        response.status(404).send({message: "diretor nao encontrado"})
    }else{
        response.status(200).send(diretor)
    }
    
}
//Genre -->ex: Comedy, Drama, Romance secolocar os 3 tipos dá certo se colocar 1 só aparace um array vazio :(
const getGenre = (request, response) => {
    const genreFilme = request.params.genreFilm
    const genre = movies.filter(genero => genero.Genre == genreFilme)
    console.log(genreFilme)

    if(!genre){
        response.status(404).send({message: "não encontramos esse genero"})
    }else{
        response.status(200).send(genre)
    }
}


module.exports = {
    getAll,
    getByDirector,
    getGenre
}



