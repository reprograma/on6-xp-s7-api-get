const { response } = require("express")
const { request } = require("../app")
const filmesGhibli = require("../models/ghibli.json")

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(filmesGhibli)
}

module.exports = {
    getAll
}