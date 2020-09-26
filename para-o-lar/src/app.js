const express = require("express")
const app = express()

//rotas
const filmes = require("./routes/filmesRoutes")
const colors = require("./routes/colors-rgb")
const estados = require("./routes/estados-cidades")
const ghibli = require("./routes/ghibli")


app.use("/filmes", filmes);
app.use("/colors", colors);
app.use("/estados", estados);
app.use("ghibli", ghibli)

module.exports = app