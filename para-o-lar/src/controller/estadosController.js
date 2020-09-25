const { response } = require("express");
const estados = require("../model/estados-cidades.json");

const getAll = (request, response) => {
    console.log(request.url);
    response.status(200).send(estados);
}

const getById = (request, response) => {
    const id = request.params.id;
   
    if(id > 27 || id <= 0){
        response.status(404).send("O id pesquisado não existe.");
    }else{
        response.status(200).send(estados.estados.find(estado => estado.id == id));
    }
   
}

const getBySigla = (request, response) => {
    const siglaEstado = request.params.sigla;
    const sigla = estados.estados.find(estado => estado.sigla == siglaEstado);

    if(!sigla){
        response.status(404).send("A sigla pesquisada não corresponde a nenhuma sigla do nosso banco de dados.");
    }else{
        response.status(200).send(sigla);
    }

}

const getByNomeEstado = (request, response) => {
    const nomeEstado = request.params.nome;
    const estado = estados.estados.find(estado => estado.nome == nomeEstado);

    if(!estado){
        response.status(404).send("O estado pesquisado não corresponde a nenhum estado do nosso banco de dados.");
    }else{
        response.status(200).send(estado);
    }

}

module.exports = {
    getAll,
    getById,
    getBySigla,
    getByNomeEstado
}