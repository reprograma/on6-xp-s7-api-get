const express = require("express")
const app = express()

const filmes = require("./routes/filmesRoute")
const colors = require("./routes/colorsRoute")
const statesCities = require("./routes/estados-cidadesRoute")
const ghibli = require("./routes/ghibliRoute")

app.use("/filmes", filmes)
app.use("/colors", colors)
app.use("/statesCities", statesCities)
app.use("/ghibli", ghibli)


module.exports = app