const city = require('../models/estados-cidades.json')

const getAll = (req, res) => {
    console.log(req.url)
    res.status(200).send(city)
}

module.exports = {
    getAll
}