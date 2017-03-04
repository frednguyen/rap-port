var express = require('express');
var path = require('path');

var watsonCall = require('./../controllers/watson/watsonCall.js');
var ORM = require('./../controllers/orm/sequelize.js')
var orm = new ORM();
var router = express.Router();

router.post('/aggregate_tones/', function(req, res) {
  
  var obj = req.body;
  // console.log(obj)
  var individual = false;
  orm.isIdUnique(obj, individual, watsonCall);
  res.end()
});

module.exports = router;