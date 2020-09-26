const cidades = require("../model/estados-cidades.json")



const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(cidades)

}

const getSiglas = (request, response) =>{
    const sigla = request.params.sigla
    console.log(sigla)
    response.status(200).send(cidades.estados.find(estados => estados.sigla == sigla))

}




module.exports = {
    getAll,
    getSiglas
}