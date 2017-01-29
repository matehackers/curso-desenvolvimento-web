var express = require('express');
var path = require('path');

var fs = require('fs');
var mustache = require('mustache');

var util = require('util');

var db = require('config');

// Carregar um template
function loadTemplate(templateFile) {
  return fs.readFileSync(templateFile).toString();
}

var app = express();

// Servir arquivos estáticos
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {

  var template = loadTemplate('./templates/index.html');
  var welcome = loadTemplate('./templates/welcome.html');
  var welcome_content = mustache.render(welcome);

  console.log('Accessing /');

  return res.end(mustache.render(template, {content: welcome}));
});

app.get('/user/:username', function(req, res) {
  console.log('Accessing with param /' + req.params.username);

  var template = loadTemplate('./templates/index.html')
  var userTemplate = loadTemplate('./templates/user.html');

  var user = db.users[req.params.username];

  var user_content = mustache.render(userTemplate, {user: user, date: '1̣ de Abril'});

  return res.end(mustache.render(template, {content: user_content}));
});

app.listen(8080);

console.log('Listening on port 8080');