var watson = require('watson-developer-cloud');
var keys = require('./watson_keys.js');

console.log(keys)

var tone_analyzer = watson.tone_analyzer(keys);

var emilyTxt = 'A word is dead when it is said, some say. Emily Dickinson';
var myTxt = 'hello Im aldo and i love luisana rivas '

tone_analyzer.tone({ text: myTxt },
  function(err, tone) {
    if (err)
      console.log(err);
    else
      // console.log(JSON.stringify(tone, null, 2));
      var obj = tone.document_tone;
      for(i = 0; i < 3; i++) {
        console.log(obj.tone_categories[i].category_name, obj.tone_categories[i])
      }
      // console.log(tone.document_tone.tone_categories[0])
});