const estadosCidades = require('../models/estados-cidades.json')

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(estadosCidades)
}



const getBySigla =(request, response)=>{
    const siglaEstado = request.params.sigla
     response.status(200).send(estadosCidades.find(estados => estados.sigla == siglaEstado))}

module.exports = {
    getAll,
    getBySigla
   }
