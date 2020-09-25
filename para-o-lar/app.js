
const express = require("express")
const app = express() 

//rotas
const filmes = require("./src/routers/filmesRoute")

app.use("/", filmes )

module.exports = app