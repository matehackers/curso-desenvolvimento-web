// Biblioteca para criar um servidor HTTP
var http = require('http');

// Função que lida com requisições para o servidor
function handleWithHello(request, response){
  response.end('Hello World com texto!! Voce visitou: ' + request.url);
}

// Criando nosso server, com a nossa função
var server = http.createServer(handleWithHello);

// Iniciando o server na porta 8080
server.listen(8080, function() {
  console.log("Server listening on: http://localhost:8080");
});
