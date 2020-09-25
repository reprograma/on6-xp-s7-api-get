// aqui eu criei uma variável para requerer e armazenar o json que eu preciso
const colors = require("../models/colors-rgb.json")

//aqui eu criei uma função para retornar todos os itens
const getAll = (request, response) => {
    response.status(200).send(colors)
}

//vou tentar criar o getByCollor

const getByColor = (request, response) => {
    const colorParam = request.params.color
    const color = colors[colorParam]
    if (!color){
        response.status(400).send({message: 'Essa cor não existe :('})
    } else {
        response.status(200).send(color)
    }
    
}

// aqui eu uso o model.export para exportar a função criada para usar na rota
module.exports = {
    getAll,
    getByColor
}