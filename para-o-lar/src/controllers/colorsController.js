const colors = require("../models/colors-rgb.json")

const getAll =  (request, response) => {
    console.log(request.url)
    response.status(200).send(colors)
}
module.exports = {
    getAll 
}