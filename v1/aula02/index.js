const express = require("express");
// import express from 'express';
const app = express(); //Iniciando o Express

app.get("/",(req,res)=>{
  res.send("Batata");
});

app.get("/blue",(req,res)=>{
  res.send("<h1>Bluemer, welcome to my page</h1>")
})

app.get("/blue/info",(req,res)=>{
  res.send("<h4>Brincando com Node.js</h4>")
})

app.listen(4000,function(erro){
  if (erro){
    console.log("Ocorreu um erro!")
  }else{
    console.log("Servidor iniciado com sucesso")
  }
})


