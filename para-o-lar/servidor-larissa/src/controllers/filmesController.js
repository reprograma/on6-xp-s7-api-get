const filmes = require("../models/filmes.json")


const getAll = (request, response) => {
    response.status(200).send(filmes)
}



const getByYear = (request, response) => {
    const year = request.params.year
    const filmeAno = filmes.find(filme => filme.Year == year)
    console.log(filmeAno)
    
    if(!filmeAno){//não consegui identificar como vou representar que ano não existe
        response.status(404).send({message: "Esse ano não existe."})//Não está retornando a mensagem quando o ano é inválido
    } else {
        response.status(200).send(filmeAno)
    }
}

module.exports = {
    getAll,
    getByYear
}
