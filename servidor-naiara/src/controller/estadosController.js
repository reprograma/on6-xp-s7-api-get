const estados =  require("../model/estados-cidades.json")

const getAll = (request,response) => {
    console.log(request.url)
    response.status(200).send(estados)
}

//buscando pela id
const getById = (request,response) => {
    const id = request.params.id
    if (id > 27 || id <= 0){
        response.status(404).send("Não encontramos esse local")
    }else{
        response.status(200).send(estados.estados.find(estado => estado.id == id))
    }
}

//buscando pela nome/estados
const getByNome = (request, response) => {
    const nome = request.params.nome
    const nomeEstado = estados.estados.find(estado => estado.nome == nome)
   
    console.log(nomeEstado)
 
    if(!nome){
        response.status(404).send({message: "estado não encontrado"})
    }else{
        response.status(200).send(nomeEstado)
    }
    
 }
 

 //buscando pela sigla/estados
const getBySigla = (request, response) => {
    const siglaEstados = request.params.sigla
    const sigla = estados.estados.find(siglas => siglas.sigla == siglaEstados)
    console.log(sigla);
    
    if(!siglaEstados){
        response.status(404).send({message: "Sigla não encontrada"})

    }else{
        response.status(200).send(sigla)
    }
}


module.exports = {
    getAll,
    getById,
    getByNome,
    getBySigla
}


//
