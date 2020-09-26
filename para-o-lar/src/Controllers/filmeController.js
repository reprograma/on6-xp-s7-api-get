const filmes = require("../models/filmes.json")

const getAll =(request, response) =>{
    console.log(request.url)
    response.status(200).send(filmes)
}

const getByTitle = (request, response)=>{
    const title = request.params.Title
    if(title){
        response.status(200).send(filmes.find(filme=> filme.Title == title))
    }else{
        response.status(404).send(` Titulo nao encontrado`)
    }
}

const getByDiretor = (request, response)=>{
    const director = request.params.Director
    response.status(200).send(filmes.filter(filme=> filme.Director == director))
    
        
    }



module.exports ={
    getAll,
    getByTitle,
    getByDiretor
}