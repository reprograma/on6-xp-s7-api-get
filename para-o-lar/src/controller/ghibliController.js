const ghibli = require("../models/ghibli.json")

//função para pegar os ghibli
const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(ghibli)

}

//exportando a função
module.exports ={
    getAll
}