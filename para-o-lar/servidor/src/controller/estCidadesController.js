const estcidades = require('../models/estados-cidades.json')

const getAll = (request, response) =>{
    console.log(request.url);
    response.status(200).send(estcidades)
}

//buscando pela sigla/estados
const getSigla = (request, response) => {
    const siglaEstados = request.params.siglaEstados
    console.log(siglaEstados);
    response.status(200).send(estcidades.find(estados => estados.siglaEstados == siglaEstados))
}

module.exports = {
    getAll,
    getSigla
}