const { response } = require("express")
const { request } = require("http")
const filmes = require("../models/filmes.json")

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(filmes)
}

const getByTitle = (request, response) =>{
    const titleFilmes = request.params.titleFilmes
    console.log(titleFilmes)
    response.status(200).send(filmes.filter(filmes => filmes.title == titleFilmes))
}

const getByYear = (request, response) =>{
    const anoFilmes = request.params.anoFilmes
    response.status(200).send(filmes.filter(filmes => filmes.Year == anoFilmes))
}

module.exports = {
    getAll,
    getByTitle,
    getByYear,
}