const filmes = require('../models/filmes.json')

const getAll = (request, response) => { // Funcionando
    return response.status(200).send(filmes)
}

const getByYear = (request, response) => { // Funcionando
    const ano = request.params.ano
    const find = filmes.find(element => element.Year == ano)
    if(!find){
        return response.status(404).send({message: 'Ano não encontrado!'})
    }else{
        return response.status(200).send(find)
    }
}

module.exports = {
    getAll,
    getByYear
}