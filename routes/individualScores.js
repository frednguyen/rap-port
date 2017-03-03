var express = require('express');
var path = require('path');

var ORM = require('./../controllers/orm/sequelize.js')
var orm = new ORM();
var router = express.Router();

router.get('/individual_scores/:message_id/', function(req, res) {
  var obj = req.params;
  orm.getScores(obj.message_id, res)
  // res.end()
});

module.exports = router;