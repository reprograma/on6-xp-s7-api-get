const express = require("express")
const app = express()

//rotas
const ghibli = require("./route/ghibliRoute")
const estados = require("./route/estadosRoute")
const filmes = require("./route/filmesRoute")
const color = require("./route/colorRoute")

app.use("/filmesGhibli", ghibli) // endereço para o postman
app.use("/estados", estados)
app.use("/filmes" , filmes)
app.use("/color" , color)

module.exports = app // o app indica as rotas raizes
