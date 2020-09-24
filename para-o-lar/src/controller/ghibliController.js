const ghibli = require('../models/ghibli.json')

const getAll = (req, res) => {
    console.log(req.url)
    res.status(200).send(ghibli)
}

module.exports = {
    getAll
}