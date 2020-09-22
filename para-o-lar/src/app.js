const express = require ("express")
const app = express () 


//chamando a rota colorRoute
const colors = require('./routes/colorRoute') 
app.use("/colors", colors) // chamar /colors/



//chamando estados-cidades
const estadosCidades = require ("./routes/estados-cidadesRoute")
app.use("/estadosCidades", estadosCidades) //chamar /estadosCidades/



//chamando filmes
const filmes = require ("./routes/filmesRoute")
app.use("/filmes", filmes) //chamar /filmes/



//chamando ghibili
const ghibili = require ("./routes/ghibiliRoute")
app.use("/ghibili", ghibili) //chamar /ghibili/


//exportando o app
module.exports = app 