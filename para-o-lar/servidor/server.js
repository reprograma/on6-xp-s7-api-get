const app = require("./src/app")

const PORT = 8080

//FUNÇÃO
app.listen(PORT, function() {
    console.log("App rodando na porta " + PORT)
})