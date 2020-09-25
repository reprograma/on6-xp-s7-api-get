const express = require("express")
const app = express()

//rotas
const colors = require("./routes/colorsRoute")
const filmes = require("./routes/filmesRoute")
const ghibli = require("./routes/ghibliRoute")
const estados = require("./routes/estadosRoute")

app.use("/colors", colors)
app.use("/filmes", filmes)
app.use("/ghibli", ghibli)
app.use("/estados", estados)

module.exports = app