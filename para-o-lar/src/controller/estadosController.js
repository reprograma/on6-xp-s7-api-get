const estados = require('../models/estados-cidades.json')

const getAll = (request, response) => { // Funcionando 
    return response.status(200).send(estados)
}

const getByName = (request, response) => { // Funcionando
    const nomeDoEstado = request.params.nomeEstado
    const find = estados.find(element => element.nome == nomeDoEstado) // essa parte está dando erro 
    if(!find){
        return response.status(404).send({message: 'Estado não encontrado!'})
    }else{
        return response.status(200).send(find)
    }
}

const getBySigla = (request, response) => { //Funcionando
    const siglaDoEstado = request.params.sigla
    const find = estados.find(element => element.sigla == siglaDoEstado)
    if(!find){
        return response.status(404).send({message: 'Sigla não encontrada!'})
    }else{
        return response.status(200).send(find)
    }
}

module.exports = {
    getAll,
    getByName,
    getBySigla
}  

