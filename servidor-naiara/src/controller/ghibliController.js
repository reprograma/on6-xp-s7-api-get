const filmes = require("../model/ghibli.json")

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(filmes)
}
const getById = (request,response)=>{
    const id = request.params.id // precisa ter o parametro pq o usuario vai digitar só o numero
    if(id > 5 || id <=0 ){
        response.status(404).send("Não encontramos esse filme")
    }else{
        response.status(200).send(filmes.find(filme => filme.id == id))   // o find trás o primeiro que ele achar apenas
    }
    
}
const getByGenero = (request,response) => {
    const generoFilme = request.params.generoFilme
    //console.log(generoFilme)
    response.status(200).send(filmes.filter(filme => filme.genero == generoFilme )) // filter trás todos os filmes que ele achar 
}
module.exports = {
    getAll,
    getById,
    getByGenero
}