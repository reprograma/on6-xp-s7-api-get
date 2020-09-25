const express = require("express")
const app = express()

const colorsRgb = require("./routes/colors-rgb")
const estadosCidades = require("./routes/estados-cidade")
const filmes = require("./routes/filmes")
const ghibli = require("./routes/ghibli")

app.use ("/colorsRgb", colorsRgb)
app.use ("/estadosCidades", estadosCidades)
app.use ("/filmes", filmes)
app.use ("/ghibli", ghibli)


module.exports = app