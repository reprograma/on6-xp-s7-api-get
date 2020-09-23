const express = require("express")
const app = express()

//rotas
const ghibli = require("./routes/ghibliRoute")

app.use("/ghibli", ghibli)

module.exports = app