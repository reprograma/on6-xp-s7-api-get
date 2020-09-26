const { request, response } = require("express")
const produtor = require("../models/ghibli.json")

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(produtor)
}

const getBytitle = (request, response) => {
    const title = request.params.title
    if(title == undefined){
        response.status(404).send("Filme nao cadastrado")
    }
    else {    
        response.status(200).send(produtor.find(produtor => produtor.title == title))
    }
}

const getByDescription = (request, response) =>{
    const description = request.params.description
    if(description == undefined){
        response.status(404).send("Filme nao cadastrado")
    }
    else {    
        response.status(200).send(description.find(produtor => produtor.title == title))
    }
}

module.exports = {
    getAll,
    getBytitle
}