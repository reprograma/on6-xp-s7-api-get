const colors = require('../models/colors-rgb.json')

const places = require('../models/estados-cidades.json')

const movies = require('../models/filmes.json')

const moviesGhibli = require('../models/ghibli.json')

const getAll = (req, res) => {
    console.log(req.url)
    res.status(200).send(colors)
}


const listAll = (req, res) => {
    console.log(req.url)
    res.status(200).send(places)
}

const showAll = (req, res) => {
    console.log(req.url)
    res.status(200).send(movies)

}

const listGhibli = (req, res) => {
    console.log(req.url)
    res.status(200).send(moviesGhibli)

}


module.exports = {
    getAll,
    listAll, 
    showAll,
    listGhibli
}