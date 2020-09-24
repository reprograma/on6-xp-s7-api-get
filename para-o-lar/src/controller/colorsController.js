const colors = require('../models/colors-rgb.json')

const getAll = (req, res) => {
    console.log(req.url)
    res.status(200).send(colors)
}

module.exports = {
    getAll
}