var initApp = function () {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user != null) {
      var uid = user.uid
      user.providerData.forEach(function (profile) {
        var name = profile.displayName;
        var email = profile.email;
        var photoURL = profile.photoURL;
        setUserInfo(name, uid, email, photoURL);
      });
    } else {
      window.location.href = '/';
    }
  }, function (err) {
    console.log(err);
  });
};
// User constructor
var User = function (name, uid, email, photoURL) {
  this.name = name;
  this.uid = uid;
  this.email = email;
  this.photoURL = photoURL;
};
// Initialize a global empty user
var user;


// Firebase references
var usersRef = firebase.database().ref('users');
var chatsRef = firebase.database().ref('chats');
var messageRef = firebase.database().ref('messages');

// db listeners to react to users signed on/out
usersRef.on('child_added', function (data) {
  getCurrentUsers();
});

usersRef.on('child_removed', function (data) {
  getCurrentUsers();
});

messageRef.on('child_added', function (data) {
  chatGUID = getChatGUID();
  var obj = data.val();
  for (key in obj) {
    var friend = obj[key].friend;
    var me = obj[key].me;
    var chat = obj[key].chat;
    var message = obj[key].message;
  }
  sendNotification(friend, me, chat, message);
});

// firebase.database().ref('/messages/' + mainChat).on('child_added', function (data) {
//   var obj = data.val();
//   displayMessage(obj.name, obj.message, obj.messageGUID, obj.myPhoto);
//   var urlIndividual = '/individual_tones';
//   var urlAggregate = '/aggregate_tones';
//   if (user.uid == obj.me) {
//     postCall(urlIndividual, JSON.stringify(obj));
//     postCall(urlAggregate, JSON.stringify(obj));
//   }
//   else {
//     postCall(urlIndividual, '{}');
//     postCall(urlAggregate, '{}')
//   }
// });

// firebase.database().ref('/gotIndividualTone/' + mainChat).on('child_added', function (data) {
//   var obj = data.val(); 
//   console.log('got individual tone')
//   getCall(obj.message_id);
// })

// firebase.database().ref('/gotAggregateTone/' + mainChat).on('child_added', function (data) {
//   var obj = data.val(); 
//   console.log('i got an aggregate Tone')
//   // getCall(obj.message_id);
// })

function postCall(url, data) {
  $.ajax({
    url: url,
    method: 'POST',
    data: data,
    contentType: 'application/json'
  });
}

function getCall(message_id) {
  var url = '/individual_scores/' + message_id;
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(data) {
    if(user.uid == data.friend) {
      var emotion_scores = data.emotion_scores.split(',');
      var language_scores = data.language_scores.split(',');
      var social_scores = data.social_scores.split(',');

      updateCharts(emotion_scores, language_scores, social_scores);
    }
  })
}

// check for authoriazation


// set user info when logged in
function setUserInfo(name, uid, email, photoURL) {
  user = new User(name, uid, email, photoURL);
  return firebase.database().ref('/users/' + uid).update(user);
};

// delete user info when logged out
function deleteUserInfo(uid) {
  console.log('deleting info for: ', uid)
  var userRef = firebase.database().ref("users");
  userRef.once("value")
    .then(function (snapshot) {
      var name = snapshot.ref.child(uid).remove();
      user = null
      firebase.auth().signOut().then(function () {
        initApp();
      }, function (error) {
        if (error) { throw error }
      });
    });
};

// get users currently signed in
function getCurrentUsers() {
  usersRef.once('value').then(function (snapshot) {
    var usersObj = snapshot.val();
    displayCurrentUsers(usersObj)
  });
};

// Initializes chat nodes by creating a new chats (meta data) node and members in chat created
function initChatNodes(uid, name) {
  // generate new chat key
  var chatGUID = firebase.database().ref().push().key;
  var chats = {
    timestamp: Date.now()
  };

  var members = {};
  members[uid] = false;
  members[user.uid] = true;

  firebase.database().ref('/chats/' + chatGUID).update(chats);
  firebase.database().ref('/members/' + chatGUID).update(members);
  goToChat(chatGUID);
};

// Send message only allows messges through if chatGUID is valid.
function sendMessage(chatGUID, initiator, friend, message) {
  if(initiator != user.uid) {
    friend = initiator
  }
  // console.log('this is me ' ,me);
  chatsRef.child(chatGUID).once('value', function (snapshot) {
    var data = snapshot.val();
    if (data != null) {
      

      var messageGUID = firebase.database().ref().push().key;
      messages = {
        chat: chatGUID,
        name: user.name,
        me: user.uid,
        myPhoto: user.photoURL,
        friend: friend,
        message: message,
        messageGUID: messageGUID,
        timestamp: Date.now()
      }
      firebase.database().ref('/messages/' + '/' + chatGUID + '/' + messageGUID).update(messages);
    }
    else {
      console.log('nooooo', data)
    }
  })

};

function sendNotification(friend, me, chat, message) {
  if (user.uid == friend) {
    Materialize.toast(message, 4000)
    getNotification(friend, me, chat);
  };
};

// get conversation members
function getMembers(chatGUID, message) {
  var membersRef = firebase.database().ref('/members/' + chatGUID);
  membersRef.once('value').then(function (snapshot) {
    var obj = snapshot.val();
    for (var key in obj) {
      var initiated = obj[key];
      if (initiated) {
        var initiator = key;
      }
      else {
        var friend = key;
      }
    }
    // console.log('me', me)
    sendMessage(chatGUID, initiator, friend, message)
    })
};

// Gets ChatGUID for from chat window. 
function getChatGUID() {
  var loc = window.location.href;
  return chatGUID = loc.substr(loc.indexOf('/chats/') + 7);
};

var mainChat = getChatGUID();
firebase.database().ref('/messages/' + mainChat).on('child_added', function (data) {
  var obj = data.val();
  displayMessage(obj.name, obj.message, obj.messageGUID, obj.myPhoto);
  var urlIndividual = '/individual_tones';
  var urlAggregate = '/aggregate_tones';
  if (user.uid == obj.me) {
    postCall(urlIndividual, JSON.stringify(obj));
    postCall(urlAggregate, JSON.stringify(obj));
  }
  else {
    postCall(urlIndividual, '{}');
    postCall(urlAggregate, '{}')
  }
});

firebase.database().ref('/gotIndividualTone/' + mainChat).on('child_added', function (data) {
  var obj = data.val(); 
  console.log('got individual tone')
  getCall(obj.message_id);
})

firebase.database().ref('/gotAggregateTone/' + mainChat).on('child_added', function (data) {
  var obj = data.val(); 
  console.log('i got an aggregate Tone')
  // getCall(obj.message_id);
})