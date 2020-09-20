const { response } = require('express')
const colors_rgb = require('../model/colors-rgb.json')

const getAll = (request, response) => response.status(200).send(colors_rgb)

module.exports = {
    getAll
}