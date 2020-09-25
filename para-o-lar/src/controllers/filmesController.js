//criar as funções, pegar o json e listar ele 

//aqui fica o que vai acontecer quando a gente chamar uma dada rota

const filmes = require("../models/filmes.json")

const getAll = (request, response)  => {
    console.log(request.url)
    response.status(200).send(filmes)
}
//exportar a função GetALL para ser usado em outro arquivo
module.exports = {
    getAll 
}