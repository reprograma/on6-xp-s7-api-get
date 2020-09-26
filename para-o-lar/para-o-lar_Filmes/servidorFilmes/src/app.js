const express = require("express")
const app = express()

//Rotas
const filmes = require("./routes/filmesRoute")

app.use("/filmes", filmes) //caminho e o nome do arquivo

module.exports = app


