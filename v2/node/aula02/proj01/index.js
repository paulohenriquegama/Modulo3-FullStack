const express = require('express');

const app = express();
const port = 3000;

const filmes = [
  'Matrix',
  'Vingadores',
  'Velozes e Furiosos'
]

app.get('/', (req, res) => {
  res.send("Bem vindo");
})

app.get('/filmes', (req, res) => {
  res.send(filmes)
})

app.get('/filmes/:id', (req, res) => {
  const id = req.params.id -1;
  const filme = filmes[id];

  res.send(filme)
})

app.listen(port, (req, res) => {
  console.info(`App está rodando em http://localhost:${port}`);
})