const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World2');
})

app.listen(3001, () => {
  console.info("Rodando http://localhost:3001")
});