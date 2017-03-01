var ORM = require('./../orm/sequelize.js');

var orm = new ORM();

module.exports = function(message_id, chat_id, obj) {
  for(i = 0; i < obj.length; i++) {
    var category_id = obj[i].category_id;
    for(j = 0; j < obj[i].tones.length; j++) {
      var tone_id = obj[i].tones[j].tone_id;
      var score = obj[i].tones[j].score;
      orm.createIndividualScore(message_id, chat_id, category_id, tone_id, score)
      // console.log(i,j, message_id, category_id, tone_id, score);
    }
  }
}