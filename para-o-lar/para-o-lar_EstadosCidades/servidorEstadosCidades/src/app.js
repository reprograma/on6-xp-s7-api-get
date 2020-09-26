const express = require("express")
const app = express()

//Rotas
const estadosCidades = require("./routes/filmesRoute")
app.use("/", estadosCidades) 
module.exports = app