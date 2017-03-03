var db = require('./../../models');
module.exports = function() {
  this.createIndividualChat = function(message_id, chat_id, me, friend, message,emotion_ids, emotion_scores, language_ids, language_scores, social_ids, social_scores, message_id, chat_id, firebaseCall) {
    db.IndividualChat.create({
      message_id: message_id,
      chat_id: chat_id,
      me: me,
      friend: friend,
      message: message,
      emotion_ids: emotion_ids,
      emotion_scores: emotion_scores, 
      language_ids: language_ids,
      language_scores: language_scores,
      social_ids: social_ids,
      social_scores: social_scores
    }).then(function(data) {
      firebaseCall(chat_id, message_id)
    })
  };
  this.getScores = function(message_id, res) {
    db.IndividualChat.findAll({
      attributes: ['message','friend', 'emotion_ids', 'emotion_scores', 'social_ids', 'social_scores', 'language_ids', 'language_scores'],
      where: {
        message_id: message_id,
        // friend: friend
      }
    }).then(function(data) {
      console.log(data[0])
      res.json(data[0])
    })
  }
}