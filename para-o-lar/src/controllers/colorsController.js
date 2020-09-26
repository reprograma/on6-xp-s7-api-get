const colors = require ("../models/colors-rgb.json")
const { request, response } = require("express")

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(colors)
}

const getColor = (request, response) =>{
    const corDesejada = request.params.color
   
    for (let color in colors){
        if(color == corDesejada){
            const corEncontrada = {}
            corEncontrada[color] = colors[color]

            return response.status(200).send(corEncontrada);
        }
    }
    return response.status(404).send("Cor não encontrada")
}

module.exports = {
    getAll,
    getColor,
}