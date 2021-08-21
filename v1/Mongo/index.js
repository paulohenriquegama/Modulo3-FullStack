const express = require('express')
const cors = require('cors')
const animesRoutes = require('./routes/animesRoutes')
// Import do Mongoose
// const { Mongoose } = require('mongoose');
const mongoose = require('mongoose')
const Anime = require('./models/anime')

const app = express()
app.use(express.json())



// Url da conexão --> mongodb://servidor:porta/nome do banco de dados
mongoose.connect('mongodb://localhost:27017/animes', {
  useNewUrlParser: true,
  useUnifiedTopology: true, //Monitoramento do banco
  useFindAndModify: false, //Monitoramento do ban
})

const corsOptions = {
  origin: `http://localhost:3000`,
  optionsSucessStatus: 200,
}

app.use(cors(corsOptions))

// const Anime = mongoose.model('Anime', animeModel)

app.get('/', (req, res) => {
  res.send('Está funcionando.')
})

// Retorna lista de animes
app.get('/animes', async (req, res) => {
  const animes = await Anime.find()
  res.send(animes)
})

app.get('/animes/:id', async (req, res) => {
  try {
    const anime = await Anime.findById(req.params.id);
    if (anime == null) {
      res.status(404).send({ message: 'Anime não localizado.' })
    }
    res.send(anime)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
})

app.post('/animes', async (req, res) => {
  const anime = new Anime({
    nome: req.body.nome,
    img: req.body.img
  })

  if (!anime || !anime.nome || !anime.img) {
    res.status(400).send({
      message:
        'Anime inválido, Veirifique se as informações dos campos opbrigatorios foram preenchidas.'
    })
    return
  }
  const animeSalvo = await anime.save()
  res.send(animeSalvo)
})

app.put('/animes/:id', async (req,res) => {
  try{
    const anime = await Anime.findByIdAndUpdate(req.params.id);
    if(Anime ==null){
      return res.status(404).send("Anime não encontrado.");
    }

    if(req.body.nome != null){
      anime.nome = req.body.nome;
    }

    if(req.body.img != null){
      anime.img = req.body.img;
    }

    const animeAtualizado = await anime.save();

    res.send(anime);

  }catch(err){
    return res.status(500).send({message:err.message })
  }
  
})


app.delete('/animes/:id', async(req,res) => {
  try{
    const anime = await Anime.findById(req.params.id);
    if(anime == null){
      res.status(404).send({message:"Anime não encontrado."})
    }else{
    await anime.remove();
    res.send({message:"Anime excluido com sucesso!!"})
    } 
  }catch(err){
    res.status(500).send({message: err.message})
  }
})

const port = 5000;
app.use(animesRoutes);

app.listen(port, () => {
  console.info(`App rorando em: http://localhost:${port}`)
})
