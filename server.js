var express = require('express');
var path = require('path');
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("./public"));

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

app.listen(PORT, function() {
  console.log('Magic happens on port ' + PORT);
});