const filmes = require("../models/filmes.json")

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(filmes)
}

const getByTitle = (request, response) =>{
    const title = request.params.title
    if(title == undefined){
        response.status(404).send("titulo nao cadastrado")
    }
    else {    
        response.status(200).send(filmes.find(filmes => filmes.title == title))
    }
}




module.exports = {
    getAll,
    getByTitle,

}