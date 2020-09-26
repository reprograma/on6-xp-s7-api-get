const { response } = require("express")
const { request } = require("http")
const filmes = require("../models/ghibli.json")

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(ghibli)
}

const getByTitle = (request, response) =>{
    const titleGhibli = request.params.titleGhibli
    console.log(titleGhibli)
}


module.exports = {
    getAll,
    getByTitle,
}