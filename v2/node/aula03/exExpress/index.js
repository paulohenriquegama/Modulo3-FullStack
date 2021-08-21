const express = require('express')

const app = express()
const port = 3001

app.use(express.json())

const filmes = [
  { id:1,
    nome: 'Capitã Marvel',
    imgUrl: 'https://bit.ly/3D78MEg'
  }, 
  { id:2,
    nome: 'Homem Aranha',
    imgUrl: 'https://bit.ly/3j3H5Eg'
  },
  { id:3,
    nome: 'Homem de Ferro',
    imgUrl: 'https://bit.ly/3sDJHvU'
  }
  ]

const getFilmesValidos = () => filmes.filter(Boolean);
const getFilmeById = (id) => getFilmesValidos().find((filme) => filme.id === id);
const getIndexByFilme = (id) => getFilmesValidos().findIndex((filme) => filme.id === id);

app.get('/', (req, res) => {
  res.send('Seja bem vindo nossa pagina de Filmes')
})

app.get('/filmes', (req, res) => {
  res.send(getFilmesValidos())
})

app.get('/filmes/:id', (req, res) => {
  const id = +req.params.id;

  const filme = getFilmeById(id)

  if (!filme) {
    res.send('Filme não encontrado!!')
  }

  res.send(filme)
})

app.post('/filmes', (req, res) => {
  const filme = req.body

  if(!filme || !filme.nome || !filme.imgUrl){
    res.status(400).send({message:"Dados invelidos, preencha todos os campos obrigatorios."});
    return;
  }
  const ultimoFilme = filmes[filmes.length - 1];
  if(filmes.length){
    filme.id = ultimoFilme.id+1;
    filmes.push(filme);
  }else{
    filme.id = '1';
    filmes.push(filme);
  }

  res.send(`O filme ${filme.nome} foi adicionado com sucesso!!`)
})

app.put('/filmes/:id', (req, res) => {
  const id = +req.params.id
  const novoFilme = req.body
  const filmeIndex = getIndexByFilme(id);

  if(filmeIndex< 0){
    res.status(404).send({
      message:'O filme não foi encontrado, tente novamente.'
    })
    return;
  }
  if(!Object.keys(novoFilme).length){
    res.status(400).send({
      message: 'O body esta vazio!'
    })
    return;
  }
  if(!novoFilme || !novoFilme.nome || !novoFilme.imgUrl){
    res.status(400).send({
      message: 'Filme invalido!'
    })
  }
  const filme = getFilmeById(id);
  const filmeAnt = filme.nome;
  filmes[filmeIndex] = {
    ...filme,
    ...novoFilme,
  }
  
  res.send(`O ${filmeAnt} foi subistituido pelo ${filme} com sucesso.`)
})

app.delete('/filmes/:id', (req, res) => {
  const id = +req.params.id
  const filmeIndex = getIndexByFilme(id)
  const filmeExcluido = filmes[filmeIndex]
  console.log(id)
  if (filmeIndex < 0) {
    res.status(404).send({message:'O Filme a ser deletado não existe!!'})
    return;
  }

  filmes.splice(filmeIndex, 1)

  res.send(`O filme ${filmeExcluido} foi deletado com sucesso!!`)
})

app.listen(port, () => {
  console.info(`Rodando http://localhost:${port}`)
})
