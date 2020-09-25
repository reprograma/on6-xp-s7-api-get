const { response } = require("express");
const ghibli = require("../model/ghibli.json");

const getAll = (request, response) => {
    console.log(request.url);
    response.status(200).send(ghibli);
}

const getById = (request, response) => {
    const id = request.params.id;

    if(id > 5 || id <= 0){
        response.status(404).send("O id pesquisado não existe.");
    }else{
        response.status(200).send(ghibli.find(filme => filme.id == id));
    }
   
}

const getByGenero = (request, response) => {
    const generoFilme = request.params.generoFilme;
    const generoFilmeModificado = generoFilme[0].toUpperCase() + generoFilme.slice(1).toLowerCase();
    
    //validação para pesquisa do gênero, começando com letra maiusculas ou minusculas
    response.status(200).send(ghibli.filter(filme => filme.genero == generoFilmeModificado));

}

const getByTitulo = (request, response) => {
    const titulo = request.params.titulo;

    response.status(200).send(ghibli.filter(filme => filme.titulo == titulo));
    
}

module.exports = {
    getAll,
    getById,
    getByGenero,
    getByTitulo
}