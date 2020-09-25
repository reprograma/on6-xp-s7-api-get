const filmes = require("../models/filmes.json")

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(filmes)
}

//Buscando pelo title film
const getTitlesFilmes = (request, response) =>{
    const titleFilme = request.params.titleFilme
    console.log(titleFilme);
    response.status(200).send(filmes.find(filme => filme.title === titleFilme))


}
//Buscando pelo genero
const getByGenero = (request, response) =>{
    const generoFilme = request.params.generoFilme
    console.log(generoFilme)
    if (generoFilme != generoFilme) {
        response.status(404).send("Not genero!")        
    }else{
        response.status(200).send(filmes.filter(filme => filme.genero === generoFilme))
    }
}

module.exports = {
    getAll,
    getTitlesFilmes,
    getByGenero
   
}