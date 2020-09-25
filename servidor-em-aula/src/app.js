const express = require("express")
const app = express()

//rotas
const filmes = require("./routes/filmesRoute")

app.use("/filmes", filmes)

module.exports = app