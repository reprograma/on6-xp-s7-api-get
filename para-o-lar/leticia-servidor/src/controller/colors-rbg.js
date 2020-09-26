const colors = require("../model/colors-rbg.json");

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(colors)
};

const getArray = (request, response) =>{
    const array = request.params.array
    response.status(200).send(colors.length.find(colors => colors[i] == array))
    
};// vou subir assim, mas vou tentar consertar essa minha caquinha aqui no getArray

module.exports = {
    getAll,
    getArray
};