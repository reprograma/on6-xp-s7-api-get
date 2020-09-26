const express = require("express")
const app = express()


const ghibli = require("./routes/ghibliRoute")
app.use("/", ghibli)
module.exports = app