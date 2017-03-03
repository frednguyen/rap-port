var admin = require("firebase-admin");
var serviceAccount = require("./../../config/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mychat-85486.firebaseio.com"
});

var db = admin.database();

module.exports = function(chat_id, message_id) {
  var key = admin.database().ref().push().key;
  admin.database().ref('/gotAggregateTone/' +'/'+ chat_id +'/'+ key).update({message_id});
}