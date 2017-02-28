var express = require('express');
var path = require('path');

var firebaseCall = require('./../controllers/firebase/firebaseCall.js');
var watson = require('./../controllers/watson/watsonCall.js');

var router = express.Router();

router.post('/test', function(req, res) {
  var message = req.body.message;
  var chatGUID = req.body.chat;
  console.log('message ', message)
  watson(message, chatGUID, firebaseCall);
  res.end()
});

module.exports = router;