// aqui eu criei uma variável para requerer e armazenar o json que eu preciso
const color = require("../models/colors-rgb.json")

//aqui eu criei uma função para retornar todos os itens
const getAll = (request, response) => {
    response.status(200).send(color)
}

// aqui eu uso o model.export para exportar a função criada para usar na rota
module.exports = {
    getAll
}