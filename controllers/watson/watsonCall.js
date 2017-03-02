var watson = require('watson-developer-cloud');
var keys = require('./../../config/watson_keys.js');
var parseScores = require('./parseScores.js');

var tone_analyzer = watson.tone_analyzer(keys);

var emilyTxt = 'A word is dead when it is said, some say. Emily Dickinson';
var myTxt = 'Customer: Hello. Agent: Hello. Agent: How can I help you today? Customer: Someone created an account using my email account. Customer: This is not my account.';

module.exports = function(obj) {
  var message = obj.message;
  if(message != undefined) {
    tone_analyzer.tone({text: message}, function(err, tone) {
      if(err) {throw err}
      else {
        var results = tone.document_tone.tone_categories;
        parseScores(obj, results);
      };
    });
  }
};