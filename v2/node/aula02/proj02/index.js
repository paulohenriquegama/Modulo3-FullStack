const express = require('express');


app = express();

const port = 3000;
app.use(express.json());

const games = [
  'Mu Arena',
  'Eudemons',
  'Asa de Cristal',
  'Ragnarok',
  'Perfect World'

];



const escolha = (min,max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

app.get('/', function (req, res) {
  res.send('Pagina de Games');
})

app.get('/games', function (req, res) {
  res.send(games);
})

console.log(escolha(0,4))
app.get('/jogar', function (req, res) {
  res.send(games[escolha(0,games.length)])
})

app.get('/games/:id', function (req, res) {
  const id = req.params.id-1;

  const game = games[id];
  if(games[id]){
  res.send(game);
  }else{
    res.send("Não existe esse jogo na lista.")
  }  
})

app.post("/games", (req,res) => {
  const game = req.body.game;
  
  games.push(game);

  res.send(`O jogo ${game} foi adicionado com sucesso!`); 
})

app.put('/games/:id',(req, res)=>{
  const id = req.params.id-1;
  let gameAnt = games[id]
  
  if(!games[id]){
    res.status(404).send({message:"O jogo não encontrado!"})
  }
  games[id] = req.body.game;
  res.send(`O jogo ${gameAnt} foi subistituido pelo jogo ${games[id]}`); 

})

app.delete('/games/:id', (req, res) => {
  
})

app.listen(port, () => {
  console.info(`App rodando em http://localhost:${port}`)
})