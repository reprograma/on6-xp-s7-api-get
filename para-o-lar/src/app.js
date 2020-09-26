const express = require("express")
const app = express()


const colorsdoexercicio = require("./routes/cores-routes")
const estadoscidades = require("./routes/cidades-routes")
const filmesdoexercicio = require("./routes/filmes-routes")
const studioghibli = require("./routes/ghibli-routes")


app.use("/colorsdoexercicio", colorsdoexercicio)
app.use("/estadoscidades", estadoscidades)
app.use("/filmesdoexercicio", filmesdoexercicio)
app.use("/studioghibli", studioghibli)


module.exports = app