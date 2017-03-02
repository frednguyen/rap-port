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
      // console.log(message)
      // res.end();
      watsonCall(message, message_id, chat_id, firebaseCall);
    });
  },
  // getting an erro with chat id... it wants an integer not a guid....
  this.createIndividualScore = function(message_id, chat_id, category_id, tone_id, score) {
    db.IndividualScore.create({
      // message_id: message_id,
      category_id: category_id,
      tone_id: tone_id, 
      score: score,
      IndividualChatMessageId: message_id
      // IndividualChatId: chat_id
    }).then(function(data) {
      console.log(data);
    });
  }
  this.test = function(m){
    console.log(m)
  }

}