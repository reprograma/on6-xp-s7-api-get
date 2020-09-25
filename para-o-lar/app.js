
const express = require("express")
const app = express() 

//rotas
const filmes = require("./src/routers/filmesRoute")
app.use("/filmes", filmes )

const ghibli = require("./src/routers/ghibliRouter")
app.use("/ghibli", ghibli)

const estados= require("./src/routers/estadosRouter")
app.use("/estados", estados)

const colors = require("./src/routers/colorsRouter")
app.use("/colors", colors)

module.exports = app