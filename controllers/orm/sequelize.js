var db = require('./../../models');
module.exports = function() {
  this.createIndividualChat = function(message_id, chat_id, me, friend, message){
    db.IndividualChat.create({
      message_id: message_id,
      chat_id: chat_id,
      me: me,
      friend: friend,
      message: message
    }).then(function(data) {
      console.log(data)
      // res.end();
    });
  },
  // getting an erro with chat id... it wants an integer not a guid....
  this.createIndividualScore = function(message_id, chat_id, category_id, tone_id, score) {
    db.IndividualScore.create({
      message_id: message_id,
      category_id: category_id,
      tone_id: tone_id, 
      scores: score,
      IndividualChatId: chat_id
    }).then(function(data) {
      console.log(data);
    });
  }
  this.test = function(m){
    console.log(m)
  }

}