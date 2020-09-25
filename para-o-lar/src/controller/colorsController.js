const { response } = require("express");
const cores = require("../model/colors-rgb.json");

const getAll = (request, response) => {
    console.log(request.url);
    response.status(200).send(cores);
}

const getByCores = (request, response) => {
    const coresRGB = request.params.cores;//color
    const cor = cores[coresRGB];

    if(!cor){
        response.status(404).send("A cor pesquisado não corresponde a nenhuma cor do nosso banco de dados.");
    }else{
        response.status(200).send(cor);
    }
   
}

module.exports = {
    getAll,
    getByCores
}