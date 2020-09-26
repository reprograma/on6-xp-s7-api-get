const express = require("express")
const app = express()

//rotas
const filmes = require("./routes/filmesRoute")
const cores = require("./routes/coresRoute")
const estadosCidades = require("./routes/estadosCidadesRoute")
const ghibli = require("./routes/ghibliRoute")

app.use("/filmes", filmes)
app.use("/cores", cores)
app.use("/estadosCidades", estadosCidades)
app.use("/ghibli", ghibli)

module.exports = app