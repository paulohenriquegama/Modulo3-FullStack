const express = require('express')

const app = express()
const port = 3001

app.use(express.json())

const animes = [
  {
    id:1,
    nome:"Naruto",
    img:"https://bit.ly/2VV2xlX"
  },
  {
    id:2,
    nome:"Sete Pecados",
    img:"https://bit.ly/3rdja7G"
  },
  {
    id:3,
    nome:"Dragon Ball Z",
    img:"https://bit.ly/3etlUc9"
  },
  ]

const getAnimesValidos = () => animes.filter(Boolean);
const getAnimeById = (id) => getAnimesValidos().find((anime) => anime.id === id);
const getIndexByAnime = (id) => getAnimesValidos().findIndex((anime) => anime.id === id);

app.get('/', (req, res) => {
  res.send('Seja bem vindo nossa pagina de Animes')
})

app.get('/animes', (req, res) => {
  res.send(getAnimesValidos())
})

app.get('/animes/:id', (req, res) => {
  const id = +req.params.id;

  const anime = getAnimeById(id)

  if (!anime) {
    res.send('Anime não encontrado!!')
  }

  res.send(anime)
})

app.post('/animes', (req, res) => {
  const anime = req.body

  if(!anime || !anime.nome || !anime.img){
    res.status(400).send({message:"Dados invalidos, preencha todos os campos obrigatorios."});
    return;
  }
  const ultimoAnime = animes[animes.length - 1];
  if(animes.length){
    anime.id = ultimoAnime.id+1;
    animes.push(anime);
  }else{
    anime.id = '1';
    animes.push(anime);
  }

  res.send(`O anime ${anime.nome} foi adicionado com sucesso!!`)
})

app.put('/animes/:id', (req, res) => {
  const id = +req.params.id
  const novoAnime = req.body
  const animeIndex = getIndexByAnime(id);
  
  if(animeIndex< 0){
    res.status(404).send({
      message:'O anime não foi encontrado, tente novamente.'
    })
    return;
  }
  if(!Object.keys(novoAnime).length){
    res.status(400).send({
      message: 'O body esta vazio!'
    })
    return;
  }
  if(!novoAnime || !novoAnime.nome || !novoAnime.img){
    res.status(400).send({
      message: 'Anime invalido!'
    })
  }
  const anime = getAnimeById(id);
  const animeAnt = anime.nome;
  animes[animeIndex] = {
    ...anime,
    ...novoAnime,
  }
  
  res.send(`O ${animeAnt} foi subistituido pelo ${novoAnime.nome} com sucesso.`)
})

app.delete('/animes/:id', (req, res) => {
  const id = +req.params.id
  const animeIndex = getIndexByAnime(id)
  const animeExcluido = animes[animeIndex]
  console.log(id)
  if (animeIndex < 0) {
    res.status(404).send({message:'O Anime a ser deletado não existe!!'})
    return;
  }

  animes.splice(animeIndex, 1)

  res.send(`O anime ${animeExcluido.nome} foi deletado com sucesso!!`)
})

app.listen(port, () => {
  console.info(`Rodando http://localhost:${port}`)
})
