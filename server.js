var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var index = require('./routes/index.js');
var dashboard = require('./routes/dashboard.js');
var chats = require('./routes/chats.js')
var tones = require('./routes/tones.js');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(express.static(__dirname+"/public"));

app.use('/', index);
app.use('/', dashboard);
app.use('/', chats);
app.use('/', tones);

app.listen(PORT, function() {
  console.log('Magic happens on port ' + PORT);
});