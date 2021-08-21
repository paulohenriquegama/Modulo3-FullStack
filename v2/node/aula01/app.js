const http = require('http');

http.createServer(function(req, res) {
  res.send("<h1>Hello World</h1>");
}).listen(3000);

console.log("Meu servidor está rodando");