var http = require('http');

// Função que lida com requisições para o servidor
function handleWithHTML(request, response) {
  var html =
`<html>

  <head>
    <title>Hello World com HTML</title>
  </head>

  <body>
    <h1>Hello World com HTML!!</h1>
    <p> Voce visitou: ${request.url} </p>
  </body>


</html>`

  response.end(html);
}

// Criando nosso server, com a nossa função
var server = http.createServer(handleWithHTML);

// Iniciando o server na porta 8080
server.listen(8080, function() {
  console.log("Server listening on: http://localhost:8080");
});
