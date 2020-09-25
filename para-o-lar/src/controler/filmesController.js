const filmes = require('../models/filmes.json')
const { request, response } = require('express')

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(filmes)
}

module.exports = {
    getAll
}