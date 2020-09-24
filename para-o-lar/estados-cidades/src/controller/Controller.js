const stateCities = require('../model/estados-cidades.json')

const listAll = (req, res) => {
    console.log(req.url)
    res.status(200).send(stateCities)
}
module.exports = {
    listAll
}