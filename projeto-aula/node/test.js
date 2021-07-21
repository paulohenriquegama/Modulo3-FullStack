let index, myArray;
let frase = "Oi meu nome é Paulo";
// console.log(String(frase.split("")).replace(""))
myArray = Array.from(frase);
// console.log(frase.length)
 
// console.log(myArray);
for(i in frase){
  index = myArray.indexOf(' ');
  if (index != -1){
    myArray.splice(index,1);

  }

}
console.log(myArray);
let cont = 0;
let contar = () => console.log(cont++);

let segundos = setInterval(contar,1000);

setTimeout(() => clearInterval(segundos),11000);
  



module.exports = myArray