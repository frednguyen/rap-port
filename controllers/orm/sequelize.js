var db = require('./../../models');
// var firebaseCall = require('./../firebase/firebaseCall');

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
  
  this.getScores = function() {
    db.IndividualChat.findAll({
      where: {
        message_id: message_id,
        friend: friend
      }
    }).then(function(data) {
      console.log(data)
    })
  }
  // this.createIndividualChat = function(message_id, chat_id, me, friend, message, watsonCall){
  //   db.IndividualChat.create({
  //     message_id: message_id,
  //     chat_id: chat_id,
  //     me: me,
  //     friend: friend,
  //     message: message
  //   }).then(function(data) {
  //     watsonCall(message, message_id, chat_id);
  //   });
  // },
  // this.createIndividualScore = function(emotion_ids, emotion_scores, language_ids, language_scores, social_ids, social_scores, message_id, chat_id, firebaseCall) {
  //   db.IndividualScore.create({
  //     emotion_ids: emotion_ids,
  //     emotion_scores: emotion_scores, 
  //     language_ids: language_ids,
  //     language_scores: language_scores,
  //     social_ids: social_ids,
  //     social_scores: social_scores,
  //     IndividualChatMessageId: message_id
  //   }).then(function(data) {
  //     firebaseCall(chat_id)
  //   });
  // }
}