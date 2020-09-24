const colors_rgb = require("../models/colors-rgb.json")

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(colors_rgb)
}

module.exports = { getAll }