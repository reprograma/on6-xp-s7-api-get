const filmes = require("../models/filmes.json")


const getAll = (request, response) => {
    response.status(200).send(filmes)
}



const getByYear = (request, response) => {
    const year = request.params.year
    const yearExists = filmes.filter(filme => filmes.Year == year)
    console.log(yearExists)
    
    if(!yearExists){//não consegui identificar como vou representar que ano não existe
        response.status(404).send({message: "Esse ano não existe."})//Não está retornando a mensagem quando o ano é inválido
    } else {
        response.status(200).send(filmes.find(filme => filme.Year == year))
    }
}

module.exports = {
    getAll,
    getByYear
}
