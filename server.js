var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var firebaseCall = require('./nodeFirebase.js');
var watson = require('./watsonTest.js');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

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

app.post('/test', function(req, res) {
  var message = req.body.message;
  var chatGUID = req.body.chat;
  console.log('message ', message)
  watson(message, chatGUID, firebaseCall);
  res.end()
});

// app.get('/new', function(req, res) {
//   firebaseCall('123');
//   res.end()
// })

app.listen(PORT, function() {
  console.log('Magic happens on port ' + PORT);
});