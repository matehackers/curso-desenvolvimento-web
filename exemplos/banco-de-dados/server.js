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
  var template = loadTemplate('template.html')
  var users = util.inspect(db.users);
  var page = mustache.render(template, {url: request.url, users: users});

  response.end(page);
}

var server = http.createServer(handleWithDatabase);

// Iniciando o server na porta 8080
server.listen(8080, function() {
  console.log("Server listening on: http://localhost:8080");
});
