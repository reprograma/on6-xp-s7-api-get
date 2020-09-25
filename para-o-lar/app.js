const express = require("express");
const app = express();
const colorRouter = require("./routes/colorRoutes");
const ghibliRouter = require("./routes/ghibliRoutes");
const filmesRouter = require("./routes/filmesRoutes");
const estadosCidadesRouter = require("./routes/estadosCidadesRoutes");

app.use("/", colorRouter);
app.use("/", ghibliRouter);
app.use("/", filmesRouter);
app.use("/", estadosCidadesRouter);

module.exports = app;
