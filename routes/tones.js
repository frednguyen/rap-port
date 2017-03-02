var express = require('express');
var path = require('path');

var watsonCall = require('./../controllers/watson/watsonCall.js');
var ORM = require('./../controllers/orm/sequelize.js')
var orm = new ORM();
var router = express.Router();

router.post('/test', function(req, res) {
  var obj = req.body;

  var message_id = obj.messageGUID;
  var chat_id = obj.chat;
  var me = obj.me;
  var friend = obj.friend;
  var message = obj.message;
  
  watsonCall(obj)
  res.end()
});

// router.get('/test', function(req, res) {
//   var obj = req.body;
//   console.log('in here',obj)
//   res.end()
//   // orm.getScores()
// })

module.exports = router;