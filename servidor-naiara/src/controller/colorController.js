const colors =  require("../model/colors-rgb.json")

const getAll = (request,response) => {
    console.log(request.url)
    response.status(200).send(color)
}

//esse getByCor vai mostrar o rgb da cor 
const getByCor = (request,response) => {
    const cor = request.params.color
    const color = colors[cor]

    if(!color){
        response.status(404).send({message: "Não encontrado"})
    }else{
        response.status(200).send(color)
    }  
}

// essegetRgb vai pedir o rgb e mostrar a cor --> deu super errado. Teria como fazer isso?
// const getRgb = (request,response) => {
//     const rgb = request.params.corRGB
//     const cores =  Object.keys(colors).map(name => {
//                 return { name: name, rgba: colors[name] }
//         })
//     console.log(cores)
//     response.status(200).send(getRgb)
// }


module.exports = {
    getAll,
    getByCor
}




