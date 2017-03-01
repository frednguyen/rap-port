var watson = require('watson-developer-cloud');
var keys = require('./../../config/watson_keys.js');

var tone_analyzer = watson.tone_analyzer(keys);

var emilyTxt = 'A word is dead when it is said, some say. Emily Dickinson';
var myTxt = 'Customer: Hello. Agent: Hello. Agent: How can I help you today? Customer: Someone created an account using my email account. Customer: This is not my account.';

module.exports = function(text, chatGUID, callback) {
  if(text != undefined) {
    tone_analyzer.tone({text: text}, function(err, tone) {
      if(err) {
        console.log(err);
      }
      else {
        var obj = tone.document_tone;
        for(i = 0; i < 3; i++) {
          console.log(obj.tone_categories[i].category_name,  obj.tone_categories[i])
        };
      };
      callback(chatGUID)
    });
  }
};