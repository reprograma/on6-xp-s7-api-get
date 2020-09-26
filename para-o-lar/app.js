const express = require("express")
const app = express()

//rotas
const ghibli = require("./src/routes/ghibliRoute")
const ghibli = require("./src/routes/filmes-Route")
const ghibli = require("./src/routes/estados-cidade-Route")
const ghibli = require("./src/routes/colors-rgb-Route")

app.use("/filmesGhibli", ghibli)
app.use("/filmesFilmes", filmes)
app.use("/estadosCidades", estados-cidades)
app.use("/colorsRgb", colors-rgb)

module.exports = app