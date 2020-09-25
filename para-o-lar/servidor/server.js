const app = require("./src/app")

const PORT = 3001

//FUNÇÃO
app.listen(PORT, function() {
    console.log("App rodando na porta " + PORT)
})