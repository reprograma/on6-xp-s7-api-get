const express = require("express")
const app = express()

const filmes = require("./routes/filmesRoute")
const ghibli = require("./routes/ghibliRoute")
const colors = require("./routes/colorsRoute")
const estados = require("./routes/estadosRoute")

app.use("/filmes", filmes)
app.use("/ghibli", ghibli)
app.use("/colors", colors)
app.use("/estados", estados)

module.exports = app