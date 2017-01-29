var http = require('http');

var fs = require('fs');
var mustache = require('mustache');

var util = require('util');

var db = require('config');

// Carregar um template
function loadTemplate(templateFile) {
  return fs.readFileSync(templateFile).toString();
}

// Função que lida com requisições para o servidor
function handleWithDatabase(request, response){
  var users = db.users;
  var selectedUser = null;

  if (request.url == '/lucas') {
    selectedUser = users[0];
  }

  if (request.url == '/joel' ) {
    selectedUser = users[1];
  }

  if (request.url == '/relsi') {
    selectedUser = users[2];
  }

  var page = null;

  if (selectedUser == null) { // nenhum usuário
    var template = loadTemplate('404.html')

    page = mustache.render(template);
    response.end(page);

  } else { // achei
    var template = loadTemplate('template3.html')

    page = mustache.render(template, {url: request.url, user: selectedUser});
    response.end(page);
  }

}

var server = http.createServer(handleWithDatabase);

// Iniciando o server na porta 8080
server.listen(8080, function() {
  console.log("Server listening on: http://localhost:8080");
});
