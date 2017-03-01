var db = require('./../../models');

module.exports = function(message_id, chat_id, me, friend, message) {
  db.individualChat.create({
    message_id: message_id,
    chat_id: chat_id,
    me: me,
    friend: friend,
    message: message
  }).then(function(data) {
    console.log(data)
    // res.end();
  });
};