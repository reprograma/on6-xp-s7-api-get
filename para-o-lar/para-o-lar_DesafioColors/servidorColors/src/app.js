const express = require("express")
const app = express()


const colors = require("./routes/filmesRoute")
app.use("/colors", colors)
module.exports = app