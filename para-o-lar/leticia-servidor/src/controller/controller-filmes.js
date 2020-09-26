const listaFilmes = require("../model/filmes.json")

const getAll = (resquest, response) =>{
    console.log(resquest.url)
    response.status(200).send(listaFilmes)

}

module.exports = {
    getAll
}