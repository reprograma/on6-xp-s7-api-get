const express = require("express");
const app = express();

//rotas
const ghibli = require("./routes/ghibliRoute");
const estados = require("./routes/estadosRoute");
const filmes = require("./routes/filmesRoute");
const cores = require("./routes/colorsRoute");

app.use("/filmesGhibli", ghibli);
app.use("/estados", estados);
app.use("/filmes", filmes)
app.use("/cores", cores);

module.exports = app;