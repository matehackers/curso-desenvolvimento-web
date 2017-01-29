// Biblioteca para criar um servidor HTTP
var http = require('http');
var fs = require('fs');
var mustache = require('mustache');

// Carregar um template
function loadTemplate(templateFile) {
  return fs.readFileSync(templateFile).toString();
}

// Função que lida com requisições para o servidor
function handleWithTemplate(request, response){
  var template = loadTemplate('template.html')
  var page = mustache.render(template, {url: request.url});

  response.end(page);
}

// Criando nosso server, com a nossa função
var server = http.createServer(handleWithTemplate);

// Iniciando o server na porta 8080
server.listen(8080, function() {
  console.log("Server listening on: http://localhost:8080");
});
