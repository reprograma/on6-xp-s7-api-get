const express = require("express")
const app = express()

// definir rotas e url
const ghibli = require("./routes/routes-ghibli")
const filmes = require("./routes/routes-filmes")
const cidades = require("./routes/estados-cidades")
const color = require("./routes/colors-rgb")


app.use("/filmesGhibli", ghibli)
app.use("/listaFilmes", filmes)
app.use("/cidades", cidades)
app.use("/colors", color)



module.exports = app