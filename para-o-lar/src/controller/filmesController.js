const { response } = require("express");
const filmes = require("../model/filmes.json");

const getAll = (request, response) => {
    console.log(request.url);
    response.status(200).send(filmes);
}

const getById = (request, response) => {
    const id = request.params.id;

    if(id > 5 || id <= 0){
        response.status(404).send("O id pesquisado não existe.");
    }else{
        response.status(200).send(filmes.find(filme => filme.id == id));
    }
   
}

const getByAno = (request, response) => {
    const ano = request.params.Year;

    response.status(200).send(filmes.find(filme => filme.Year == ano));
   
}

const getByTitulo = (request, response) => {
    const titulo = request.params.Title;

    response.status(200).send(filmes.filter(filme => filme.Title == titulo));
    
}

const getByDiretor = (request, response) => {
    const diretor = request.params.Director;

    response.status(200).send(filmes.filter(filme => filme.Director == diretor));
    
}

module.exports = {
    getAll,
    getById,
    getByAno,
    getByTitulo,
    getByDiretor
}