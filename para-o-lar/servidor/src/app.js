const express = require("express")
const app = express()

//rota de filmes
const filmes = require("./routes/filmesRoute.js")

//rota de Ghibli
const ghibli = require("./routes/ghibliRoute.js")

//rota de Colors-rgb
const colors = require("./routes/colorsRoute.js")

//rota de Cidades/Estados
const estcidades = require("./routes/estCidadesRoute.js")


app.use("/filmes", filmes)
app.use("/ghibli", ghibli)
app.use("/colors", colors) 
app.use("/estcidades", estcidades)

module.exports = app