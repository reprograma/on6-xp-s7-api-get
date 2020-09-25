const app = require("./app");

const PORT = 3000;

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Servidor rodando na porta ${PORT}`);
  }
});
