// trazer as portas, para isso criamos o express

const app = require("./src/app") 

const PORT = 3001
app.listen(PORT, function (){
    console.log("O nosso app está rodando na porta: " + PORT)
})


//src = raiz (seria nossa pasta raiz do projeto)
