const path = require('path');
const myArray = require('./test');
// console.log(path.basename(__filename))

// console.log(myArray)

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

console.log(animes[1].nome)