const express = require("express")
const app = express()

const ghibli = require("./routes/ghibliRoute")
const filmes = require("./routes/filmesRoute")
const estados_cidades = require("./routes/estados-cidadesController")
const colors_rgb = require("./routes/colors-rgbRoute")


app.use("/ghibli", ghibli)
app.use("/filmes", filmes)
app.use("/estados-cidades", estados_cidades)
app.use("/colors-rgb", colors_rgb)

module.exports = app