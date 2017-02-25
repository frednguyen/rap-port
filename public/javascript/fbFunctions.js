// User constructor
var User = function(name, uid) {
  this.name = name;
  this.uid = uid;
};
// Initialize a global empty user
var user;

// Firebase references
var usersRef = firebase.database().ref('users');

var chatRef = firebase.database().ref('chats');
var messageRef = firebase.database().ref('messages');

// db listeners to react to users signed on/out
usersRef.on('child_added', function(data) {
  getCurrentUsers();
});

usersRef.on('child_removed', function(data) {
  getCurrentUsers();
});

messageRef.on('child_added', function(data) {
  sendNotification();
});

// check for authoriazation
initApp = function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('signed in!!! :)')
      setUserInfo(user.uid, user.displayName);
    } else {
      console.log('signed Off :(')
      
    }
  }, function(error) {
    console.log(error);
  });
};

// set user info when logged in
function setUserInfo(uid, name) {
  user = new User(name, uid);
  return firebase.database().ref('/users/' + uid).update(user);
};

// delete user info when logged out
function deleteUserInfo(uid) {
  console.log('deleting info for: ', uid)
  var userRef = firebase.database().ref("users");
  userRef.once("value")
    .then(function(snapshot) {
      var name = snapshot.ref.child(uid).remove();
      user = null
      firebase.auth().signOut().then(function() {
        initApp();
      }, function(error) {
        if(error){throw error}
    });
  });
};

// get users currently signed in
function getCurrentUsers() {
  usersRef.once('value').then(function(snapshot) {
    var usersObj = snapshot.val();
    displayCurrentUsers(usersObj)
  });
};

function initChatNodes(uid, name) {
  // generate chat key
  var chatGUID = firebase.database().ref().push().key;
  var chats = {
    timestamp: Date.now()
  };
  var members = {};
  members[uid] = true;
  members[user.uid] = true;
  firebase.database().ref('/chats/' + chatGUID).update(chats);
  firebase.database().ref('/members/' + chatGUID).update(members);
  goToChat(chatGUID);
};

function sendMessage(chatGUID, message) {
  var messageGUID = firebase.database().ref().push().key;
  messages = {
    name: user.name,
    message: message,
    timestamp: Date.now()
  }
  // firstMessage(chatGUID)
  firebase.database().ref('/messages/' +'/'+ chatGUID +'/'+ messageGUID).update(messages);
};

function readMessage() {

};

function sendNotification() {
  if(user.uid == 'lCCCnZELJ9WKfqb4FnJ5dFvpYb92') {
    console.log('notified!')
  }
  // var chatGUID = getChatGUID();
  // var membersRef = firebase.database().ref('/members/' + chatGUID);
  // membersRef.once('value').then(function(snapshot) {
  //   var obj = snapshot.val();
  //   for(key in obj) {
  //     console.log(key)
  //     if(user.uid = key) {
  //       console.log('thats me');
  //     }
  //     else{console.log('i need to send notification to him', key)}
  //   }
  // });
}

function getChatGUID() {
  var loc = window.location.href;
  return chatGUID = loc.substr(loc.indexOf('/chats/')+7);
}