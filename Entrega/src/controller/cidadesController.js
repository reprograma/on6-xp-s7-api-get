const cidades = require("../model/estados-cidades.json")

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(cidades)

}

module.exports = {
    getAll
}

//controla alguma ação que tem api, usa o método...
//requeste e response