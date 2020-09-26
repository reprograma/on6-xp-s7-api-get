const { request } = require("express");

const express = require("express")
const app = express()

//incluindo rotas
const ghibli = require("./routes/ghibliRoute")

app.use("/filmesGhibli", ghibli)

module.exports = app