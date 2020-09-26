const app = require("./src/app")

const PORT = 8080

app.listen(PORT, function (){
    console.log("A porta é de número: " + PORT)
})