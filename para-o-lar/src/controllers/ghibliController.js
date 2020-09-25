const ghibli = require("../models/ghibli.json")

const getAll =  (request, response) => {
    console.log(request.url)
    response.status(200).send(ghibli)
}

const getByTitle = (request, response) => {
    const title = request.params.title

    response.status(200).send(ghibli.find(title => ghibli.title== title))
   
}
module.exports = {
    getAll,
    getByTitle
}