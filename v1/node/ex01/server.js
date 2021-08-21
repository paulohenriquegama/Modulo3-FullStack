const express = require('express')
const mongoose = require('mongoose')
const foodRoutes = require("./routes/foodRoutes");

const app = express()

app.use(express.json())

port = 3000
userName = 'paulohenriquehenrique'
senha = 'uN4g6pSE0uRAqPK6'

mongoose.connect(
  `mongodb+srv://${userName}:${senha}@cluster0.al6x7.mongodb.net/test`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

app.use(foodRoutes);

app.listen(port, () => {
  console.info('Servidor rodando!')
})
