var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/chats/:key', function(req, res) {
  var key = req.params.key
  res.sendFile(path.join(__dirname, './../chat.html'));
});

module.exports = router;