
const express = require("express")
const app = express()

const filmes = require("./routes/filmesRoute")
app.use("/filmes", filmes)

const estados = require("./routes/estados-cidadesRoute")
app.use("/estados", estados)

const ghibli = require("./routes/ghibliRoute")
app.use("/ghibli", ghibli)

const colors = require("./routes/colorsRoute")
app.use("/colors", colors)

module.exports = app
