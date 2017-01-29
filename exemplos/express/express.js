var express = require('express');
var path = require('path');

var app = express();

// Servir arquivos estáticos
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
  response.end('Oi');
});

app.get('/users/:username', function(request, response) {
  response.end('Oi ' + request.params.username);
});

app.listen(8080);