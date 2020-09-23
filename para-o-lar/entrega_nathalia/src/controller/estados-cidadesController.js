const statesCities = require("../model/estados-cidades.json")

const getAll = (request, response) => {
    response.status(200).send(statesCities)
}

module.exports = {
    getAll
}