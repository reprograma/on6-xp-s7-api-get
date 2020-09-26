const filmes = require("../models/ghibli.json")

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(filmes)
}



const getByTitle =(request, response) => {
    const filmetitulo = request.params.title

    console.log(filmetitulo)
    response.status(200).send(filmes.filter(filme => filme.title.toLowerCase() == filmetitulo.toLowerCase()))
}

module.exports = {
    getAll,
    getByTitle
   }