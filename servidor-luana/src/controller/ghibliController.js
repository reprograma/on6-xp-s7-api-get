const ghibli = require('../model/ghibli.json')

const getAll = (request, response) => response.status(200).send(ghibli)

module.exports = {
    getAll
}