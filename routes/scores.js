var express = require('express');
var path = require('path');

var ORM = require('./../controllers/orm/sequelize.js')
var orm = new ORM();
var router = express.Router();

router.get('/scores/:message_id/:friend', function(req, res) {
  console.log('i am here in this test', req.params.message_id, req.params.friend)
  var obj = req.params;
  orm.getScores(obj.message_id, obj.friend)
  res.end()
});

module.exports = router;