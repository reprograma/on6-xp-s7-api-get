const ghibli = require("../models/ghibli.json")

const getAll =  (request, response) => {
    console.log(request.url)
    response.status(200).send(ghibli)
}

const getById = (request, response) => {
    const id = request.params.id
    if(id >5 || id <0){
        response.status(404).send("ID não encontrado")
    }else{
        response.status(200).send(ghibli.find(ghibli => ghibli.id == id))
    }
}
module.exports = {
    getAll,
    getById
}