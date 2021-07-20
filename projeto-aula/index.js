const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let animes = [
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
  {
    id:4,
    nome:"One Piece",
    img:"https://bit.ly/2US5x1C"
  },
  {
    id:5,
    nome:"Boruto",
    img:"https://bit.ly/3re6xtb"
  },
  {
    id:6,
    nome:"Anime para deletar",
    img:"https://bit.ly/3re6xtb"
  },

];

const getAnimesValidos = () => animes.filter(Boolean);
const getAnimebyID = id => getAnimesValidos().find(anime => anime.id === id);
const getAnimeIndexbyID = id => getAnimesValidos().findIndex(anime => anime.id === id);
// const getAnimebyID = id => {
//   res.send("Entro aqui")
//   if(getAnimesValidos){
//     getFilmesValidos().find(function(filme){
//       filme.id===id
//     })
//   }else{
//     res.send("Filme não encontrado!!")
//   }
// };


app.get('/',(req,res)=> {
  res.send('Hello, Bluemer!');
});

// GET - Animes - Retorna a lista de animes

app.get('/animes',(req,res)=>{
  res.send(getAnimesValidos());
});

app.get("/animes/:id", (req,res)=>{
  const id = +req.params.id;
  const anime = getAnimebyID(id);
  if(!anime){
    res.send("Anime não encontrado")
  }
  res.send(anime)
});

app.post("/animes",(req,res) => {
  let anime = req.body;

  if(!anime || !anime.nome || !anime.img){
    res.status(400).send({
      message:  "Personagem Inválido. Certifique-se que o body da requisição possui 'nome' e 'imagemURL'."
    })
  }else{

  anime.id = animes.length + 1;
  let data = animes
  anime = {id: data.id, ...anime}
  animes.push(anime);
  res.send(`Anime adicionado com sucesso. Id do filme ${anime.id}` )
  }
});


// PUT - /animes/{id} - Atualiza filme pelo ID

app.put("/animes/:id",(req,res) => {
  const id = +req.params.id;

  // const anime = req.body.anime;
  const animeIndex = getAnimeIndexbyID(id);
  if(animeIndex <0){
    res.status(404).send({
      message: 'O anime que você está tentando editar não foi encontrado.'
    });
    return;
  };

  const novoAnime = req.body;
  if(!Object.keys(novoAnime).length){
    res.status(400).send({message:"O body da requisição não pode estar vazio."});
    return;
  }

  if(!Object || !novoAnime.nome || !novoAnime.img){
    res.status(400).send({
      message:  "Anime Inválido. Certifique-se que o body da requisição possui 'nome' e 'imagemURL'."
    });
    return;
  }

  const anime = getAnimebyID(id);
  
  animes[animeIndex] ={
    ...anime,
    ...novoAnime,
  };

  res.send(animes[animeIndex]);

});


// Delete - /animes/{id} - Remove filme pelo ID

app.delete("/animes/:id", (req,res) => {
  
  const id = +req.params.id;
  // let animeDeletado = animes[id]
  // animes.splice(id,1);
  // res.send(`Anime ${animeDeletado} excluído com sucesso `)

  const animeIndex = getAnimeIndexbyID(id);

  if(animeIndex < 0){
    res.status(404).send({
      message: 'O anime que você está tentando excluir não foi encontrado.'
    })
    return;
  };

  animeDeletado = animes[animeIndex].nome;
  // delete animes[animeIndex];
  animes.splice(animeIndex,1);

  res.send({message:`Anime '${animeDeletado}' excluído com sucesso!`});

});

app.listen(port, () => {
  console.info(`App rodando em: http://localhost:${port}`)
});