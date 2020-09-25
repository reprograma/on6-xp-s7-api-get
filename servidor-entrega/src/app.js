const express = require("express")
const app = express()

//rotas
const ghibli = require("./routes/ghibliRoute")
app.use("/filmesGhibli", ghibli)

const filmes = require("./routes/filmesRoute")
app.use("/filmesAmericanos", filmes)

const estados = require("./routes/estados-cidadesRoute")
app.use("/estadosBrasileiros", estados)

const colors = require("./routes/colors-rgbRoute")
app.use("/colors", colors)

module.exports = app