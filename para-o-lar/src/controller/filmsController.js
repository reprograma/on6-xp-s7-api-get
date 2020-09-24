const films = require('../models/filmes.json')

const getAll = (req, res) =>{
    console.log(req.url)
    res.status(200).send(films)
}

module.exports = {
    getAll
}