const express = require('express');

const port = 3002;

app = express();


app.use(express.json());

const carros = [
  {
  modelo:"Onix",
  tipo: "Sedan",
  tipoCombustivel: "Flex",
  marca: "Chevrolet",
  anoCarro: "2019"
  },
  {
    modelo:"Gol",
    tipo: "Hatch",
    tipoCombustivel: "Gasolina",
    marca: "Volkswagen",
    anoCarro: "2015"
    },
]


app.get('/', (req, res)=>{
  res.send("Bem Vindo ao site de carros");
})

app.get('/carros', (req, res)=>{
  res.send(carros)
})


app.get('/carros/:id', (req, res)=>{
  const id = req.params.id-1;
  console.log(id)
  if(!carros[id]){
    res.send("Carro não localizado!!")
  }
  
  res.send(`Modelo: ${carros[id].modelo} 
  Tipo: ${carros[id].tipo}
  Tipo Combustivel: ${carros[id].tipoCombustivel}
  Marca: ${carros[id].marca}
  Ano Carro: ${carros[id].anoCarro}`);
})

app.post('/carros',(req, res)=>{
  const carro = req.body;
  
  carros.push(carro);
  
  res.send('Carro adicionado com sucesso!')
})

app.put('/carros/:id',(req, res)=>{
  const id = req.params.id -1;

  if(!carros[id]) {
    res.send('Carro não localizado.')
  }

  carros[id] = req.body;

  res.send('Carro atualizado com sucesso')
})

app.delete('/carros/:id',(req, res)=>{
  const id = req.params.id -1;

  if (!carros[id]) {
    res.send('Carro não localizado.')
  }

  carros.splice(id,1);

  res.send('Carro exclui com sucesso!')
})


app.listen(port,()=>{
  console.info(`Site rodando em http://localhost:${port}`);
})