var admin = require("firebase-admin");
var serviceAccount = require("./../../config/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mychat-85486.firebaseio.com"
});

var db = admin.database();

module.exports = function(chatGUID) {
  var key = admin.database().ref().push().key;
  admin.database().ref('/gotTone/' +'/'+ chatGUID +'/'+ key).update({key});
}