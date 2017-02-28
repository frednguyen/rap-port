var watson = require('watson-developer-cloud');
var keys = require('./watson_keys.js');

var tone_analyzer = watson.tone_analyzer(keys);

var emilyTxt = 'A word is dead when it is said, some say. Emily Dickinson';
var myTxt = 'fred was here late...'

tone_analyzer.tone({ text: myTxt },
  function(err, tone) {
    if(err) {
      console.log(err);s
    }
    else {
      var obj = tone.document_tone;
      // for(i = 0; i < 3; i++) {
      //   console.log(obj.tone_categories[i].category_name, obj.tone_categories[i])
      // };
      
      for(i = 0; i < 5; i++) {
        console.log('tone '+i,obj.tone_categories[0].tones[i].tone_name);
      }
    };
});