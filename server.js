var express = require('express');
var path = require('path');
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname+"/public"));

app.get('/sample', function(req, res) {
    res.sendFile(path.join(__dirname, 'loggedIn.html'));  
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/chats/:key', function(req, res) {
  var key = req.params.key
  res.sendFile(path.join(__dirname, 'chat.html'));
});

app.get('/test:count', function(req, res) {
  var count = req.params.count;
  res.end('wow')
})

app.listen(PORT, function() {
  console.log('Magic happens on port ' + PORT);
});