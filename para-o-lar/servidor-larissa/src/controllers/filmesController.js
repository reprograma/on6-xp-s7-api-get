const filmes = require("../models/filmes.json")


const getAll = (request, response) => {
    response.status(200).send(filmes)
}



const getByYear = (request, response) => {
    const year = request.params.year
    const filmeAno = filmes.find(filme => filme.Year == year)
    console.log(filmeAno)
    
    if(!filmeAno){
        response.status(404).send({message: "Esse ano não existe."})
    } else {
        response.status(200).send(filmeAno)
    }
}

const getByDirector = (request,response) => {
     const directorFilm = request.params.director
     const diretor = filmes.find(filmes => filmes.Director == directorFilm)

    if(!diretor){
        response.status(404).send({message: "Diretor não encontrado"})
    }else{
        response.status(200).send(diretor)
    }
}


module.exports = {
    getAll,
    getByYear,
    getByDirector
}
