var ORM = require('./../orm/sequelize.js');
var firebaseCall = require('./../firebase/firebaseCall');

var orm = new ORM();

// parse through data by looping through obj and storing info in arrays that will be stored in db as strings.
module.exports = function(obj, results) {
  var emotion_scoresArray = [],
    emotion_idsArray = [],
    language_scoresArray = [],
    language_idsArray = [],
    social_scoresArray = [],
    social_idsArray = [];
  
  for(i = 0; i < results.length; i++) {
    var category_id = results[i].category_id;
    for(j = 0; j < results[i].tones.length; j++) {
      var tone_id = results[i].tones[j].tone_id;
      var score = results[i].tones[j].score;
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
  var message_id = obj.messageGUID;
  var chat_id = obj.chat;
  var me = obj.me;
  var friend = obj.friend;
  var message = obj.message;

  // join array to strings
  var emotion_ids = emotion_idsArray.join(',');
  var emotion_scores = emotion_scoresArray.join(',');
  var language_ids = language_idsArray.join(',');
  var language_scores = language_scoresArray.join(',');
  var social_ids = social_idsArray.join(',');
  var social_scores = social_scoresArray.join(',');

  orm.createIndividualChat(message_id, chat_id, me, friend, message,emotion_ids, emotion_scores, language_ids, language_scores, social_ids, social_scores, message_id, chat_id, firebaseCall);
}