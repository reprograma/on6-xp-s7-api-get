const express = require("express")
const app = express()

//rotas
const filmes = require("./routrs/filmesRoute")
const ghibli = require('./routrs/ghibliRoute')
const estadosCidade = require('./routrs/estadoscidadeRoute')
const colors = require('./routrs/colorsRoute')

app.use("/filmes", filmes)
app.use("/ghibliFilmes", ghibli)
app.use('/estados', estadosCidade)
app.use('/colors', colors)

module.exports = app