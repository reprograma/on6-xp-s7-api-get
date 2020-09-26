const express = require("express")

const app = express()

const ghibli = require("./routers/ghibliRouter")
const estados = require("./routers/estadosRouter")
const filmes = require("./routers/filmesRouter")
const cor = require("./routers/colorsRouter")

app.use("/filmesGhibli", ghibli)
app.use("/estados", estados)
app.use("/filmes", filmes)
app.use("/cor", cor)



module.exports = app

