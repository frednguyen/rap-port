var admin = require("firebase-admin");
var serviceAccount = require("./../../config/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mychat-85486.firebaseio.com"
});

var db = admin.database();

module.exports = function(chat_id, message_id, individual) {
  if(individual) {
    var node = '/gotIndividualTone/';
  }
  else {
    var node = '/gotAggregateTone/';
  }
  var key = admin.database().ref().push().key;
  admin.database().ref(node +'/'+ chat_id +'/'+ key).update({message_id});
}