const filmes = require("../models/ghibli.json")


const getAll = (request, response) =>{
    response.status(200).send(filmes)
}

const getById = (request, response) => { // pedir da url e encontrar o q foi solicitado
    const id = request.params.id // esta indo atras
    
    const filme = filmes.find(filme => filme.id == id)

    if (filme) {
        return response.status(200).send(filme)
    } else {
        return response.status(404).send("Id não encontrado")
    }
}

const getByGenero = (request, response) => {
    const generoFilme = request.params.generoFilme

    const genero = filmes.filter(filme => filme.genero.toLowerCase() == generoFilme.toLowerCase())

    if(genero) {
        return response.status(200).send(genero)
    } else {
        return response.status(404).send("Genero não encontrado")
    }

}

module.exports = {
    getAll,
    getById,
    getByGenero,
}

