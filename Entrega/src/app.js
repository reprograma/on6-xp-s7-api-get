//chamando a constanto com express estrutura web de roteamento
const express = require("express")

//chamando a aplicação com a função express
const app = express()

//o caminho dentro das pastas
const colors = require("./routes/colorsRoute")
const cidades = require("./routes/cidadesRoute")
const filmes = require("./routes/filmesRoute")
const ghibli = require("./routes/ghibliRoutes")

//para a aplicação usar o caminho até colors,cidades
app.use("/colors", colors)
app.use("/cidades", cidades)
app.use("/filmes", filmes)
app.use("/ghibli", ghibli)

module.exports = app
