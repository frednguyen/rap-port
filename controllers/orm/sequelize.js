var db = require('./../../models');
// var watsonCall = require('./../watson/watsonCall.js');
module.exports = function() {
  this.createIndividualChat = function(message_id, chat_id, me, friend, message,emotion_ids, emotion_scores, language_ids, language_scores, social_ids, social_scores, individual, firebaseCall) {
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
      firebaseCall(chat_id, message_id, individual)
    });
  };

  this.createAggregateChat = function(chat_id, me, friend, message, emotion_ids, emotion_scores, language_ids, language_scores, social_ids, social_scores, individual, message_id, firebaseCall) {
    db.AggregateChat.create({
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
      firebaseCall(chat_id, message_id, individual);
    })
  }

  this.getIndividualScores = function(message_id, res) {
    db.IndividualChat.findAll({
      attributes: ['message','friend', 'emotion_ids', 'emotion_scores', 'social_ids', 'social_scores', 'language_ids', 'language_scores'],
      where: {
        message_id: message_id,
        // friend: friend
      }
    }).then(function(data) {
      console.log(data[0])
      res.json(data[0])
    });
  };
  this.isIdUnique = function(obj, individual, watsonCall) {
    var chat_id = obj.chat_id;
    db.AggregateChat.count({
      where: {
        chat_id: obj.chat_id
      }
    }).then(function(count) {
      // console.log(data)
      if(count != 0) {
        // return false;
        console.log('this is not unitque')
      }
      else {
        watsonCall(obj, individual)
        console.log('this is unique')
      }      
      // return true;
    });
  };
}