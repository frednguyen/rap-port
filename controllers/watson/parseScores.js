var ORM = require('./../orm/sequelize.js');

var orm = new ORM();

module.exports = function(message_id, chat_id, obj) {
  var emotion_scoresArray = [],
    emotion_idsArray = [],
    language_scoresArray = [],
    language_idsArray = [],
    social_scoresArray = [],
    social_idsArray = [];
  
  for(i = 0; i < obj.length; i++) {
    var category_id = obj[i].category_id;
    for(j = 0; j < obj[i].tones.length; j++) {
      var tone_id = obj[i].tones[j].tone_id;
      var score = obj[i].tones[j].score;
      if(category_id == 'emotion_tone') {
        emotion_scoresArray.push(score);
        emotion_idsArray.push(tone_id);
        continue;
      }
      else if(category_id == 'language_tone') {
        language_scoresArray.push(score);
        language_idsArray.push(tone_id);
        continue;
      }
      else if(category_id == 'social_tone') {
        social_scoresArray.push(score);
        social_idsArray.push(tone_id);
        continue;
      }
    }
  };
  var emotion_ids = emotion_idsArray.join(',');
  var emotion_scores = emotion_scoresArray.join(',');
  var language_ids = language_idsArray.join(',');
  var language_scores = language_scoresArray.join(',');
  var social_ids = social_idsArray.join(',');
  var social_scores = social_scoresArray.join(',');

  orm.createIndividualScore(emotion_ids, emotion_scores, language_ids, language_scores, social_ids, social_scores, message_id);
}