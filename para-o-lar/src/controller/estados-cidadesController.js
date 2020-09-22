//chamar e listar o json estados-cidades.json
const estadosCidades = require ("../models/estados-cidades.json") //trazendo o conteudo de color-rgb.json

const getAll = (request,Response) => {
    console.log(request.url)
    Response.status(200).send(estadosCidades)
}


//faz com que consigamos exportar a função getAll para ser usada em outro arquivo
module.exports = {
    getAll //função com o nome de getAll para trazer tudo o que tem dentro de estadosCidades (estados-cidades.json)
}