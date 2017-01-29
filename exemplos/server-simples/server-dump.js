var http = require('http');
var util = require('util');

// Imprime a variável de requisição
function handleWithDump(request, response){
  response.end(util.inspect(request.headers));
}

var server = http.createServer(handleWithDump);

server.listen(8080, function() {
  console.log("Server listening on: http://localhost:8080");
});
