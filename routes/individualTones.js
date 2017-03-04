var express = require('express');
var path = require('path');

var watsonCall = require('./../controllers/watson/watsonCall.js');
var ORM = require('./../controllers/orm/sequelize.js')
var orm = new ORM();
var router = express.Router();

router.post('/individual_tones', function(req, res) {
  var obj = req.body;

  var message_id = obj.messageGUID;
  var chat_id = obj.chat;
  var me = obj.me;
  var friend = obj.friend;
  var message = obj.message;
  var individual = true;
  watsonCall(obj, individual)
  res.end()
});

module.exports = router;