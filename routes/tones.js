var express = require('express');
var path = require('path');

var firebaseCall = require('./../controllers/firebase/firebaseCall.js');
var watsonCall = require('./../controllers/watson/watsonCall.js');
var sequelizeCall = require('./../controllers/orm/sequelize.js')

var router = express.Router();

router.post('/test', function(req, res) {
  var obj = req.body;

  var message_id = obj.me;
  var chat_id = obj.chat;
  var me = obj.me;
  var friend = obj.friend;
  var message = obj.message;
  
  sequelizeCall(message_id, chat_id, me, friend, message);
  // console.log('message ', req.body)
  // watsonCall(message, chat_id, firebaseCall);
  res.end()
});

module.exports = router;