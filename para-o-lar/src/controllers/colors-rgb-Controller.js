const { request, response } = require("express")
const estados = require("../models/colors-rgb.json")

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(colors-rgb)
}



module.exports = {
    getAll
    
}