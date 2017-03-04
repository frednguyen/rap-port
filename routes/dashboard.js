var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/dashboard', function(req, res) {
  res.sendFile(path.join(__dirname, './../loggedIn.html'));
});

module.exports = router;