const cores = require('../models/colors-rgb.json')

const getAll = (request, response) => {
    return response.status(200).send(cores)
}

module.exports = {
    getAll
}