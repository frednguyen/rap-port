var db = require('./../../models');
// var firebaseCall = require('./../firebase/firebaseCall');

module.exports = function() {
  this.createIndividualChat = function(message_id, chat_id, me, friend, message, watsonCall, firebaseCall){
    db.IndividualChat.create({
      message_id: message_id,
      chat_id: chat_id,
      me: me,
      friend: friend,
      message: message
    }).then(function(data) {
      watsonCall(message, message_id, chat_id, firebaseCall);
    });
  },
  // getting an erro with chat id... it wants an integer not a guid....
  this.createIndividualScore = function(emotion_ids, emotion_scores, language_ids, language_scores, social_ids, social_scores, message_id) {
    db.IndividualScore.create({
      emotion_ids: emotion_ids,
      emotion_scores: emotion_scores, 
      language_ids: language_ids,
      language_scores: language_scores,
      social_ids: social_ids,
      social_scores: social_scores,
      IndividualChatMessageId: message_id
    }).then(function(data) {
      console.log('done')
    });
  }
  this.test = function(m){
    console.log(m)
  }

}