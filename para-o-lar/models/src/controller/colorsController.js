const colors = require("../model/colors-rgb.json")

const getAll = (request, response) => {
    response.status(200).send(colors)
}

module.exports = {
    getAll
}