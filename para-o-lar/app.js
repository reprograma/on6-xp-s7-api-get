const express = require("./servidor/node_modules/express")
const app = express()
const filmes = require("./routes/filmesRoute")
const cores = require("./routes/coresRoute")
const estCidades = require("./routes/estadosecidades")
const ghibli = require("./routes/ghibliRoutes")

app.use("/colors", cores)
app.use("/estadosecidades", estCidades)
app.use("/filmes", filmes)
app.use("/ghibli", ghibli)

module.exports = app