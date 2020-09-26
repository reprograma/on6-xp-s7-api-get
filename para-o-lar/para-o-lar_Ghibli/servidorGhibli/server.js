const app = require("./servidorGhibli/src/app")

const PORT = 8090

app.listen(PORT, function (){
    console.log("O Nosso app esta rodando na porta " + PORT)
})