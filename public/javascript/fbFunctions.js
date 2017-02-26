// User constructor
var User = function(name, uid) {
  this.name = name;
  this.uid = uid;
};
// Initialize a global empty user
var user;
var mainChat = getChatGUID();

// Firebase references
var usersRef = firebase.database().ref('users');
var chatsRef = firebase.database().ref('chats');
var messageRef = firebase.database().ref('messages');

// db listeners to react to users signed on/out
usersRef.on('child_added', function(data) {
  getCurrentUsers();
});

usersRef.on('child_removed', function(data) {
  getCurrentUsers();
});

messageRef.on('child_added', function(data) {
  chatGUID = getChatGUID();
  var obj = data.val();
  for(key in obj) {
    var friend = obj[key].to;
  }
  sendNotification(friend);
});

firebase.database().ref('/messages/' + mainChat).on('child_added', function(data) {
  console.log(data.val())
})

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
function sendMessage(chatGUID, friend, message) {
  chatsRef.child(chatGUID).once('value', function(snapshot) {
    var data = snapshot.val();
    if(data != null) {
      var messageGUID = firebase.database().ref().push().key;
      messages = {
        name: user.name,
        friend: friend,
        message: message,
        timestamp: Date.now()
      }
      firebase.database().ref('/messages/' +'/'+ chatGUID +'/'+ messageGUID).update(messages);
    }
    else{
      console.log('nooooo', data)
    }
  })
  
};

function readMessage() {

};

function sendNotification(friend) {
  if(user.uid == friend) {
    console.log('notified!')
  };
};

function getMembers(chatGUID, message) {
  var membersRef = firebase.database().ref('/members/' + chatGUID);
  membersRef.once('value').then(function(snapshot) {
    var obj = snapshot.val();
    for(var key in obj) {
      var notifyUser = obj[key]
      if(!notifyUser) {
        sendMessage(chatGUID, key, message)
      }
    }
  });
};

// Gets ChatGUID for from chat window. 
function getChatGUID() {
  var loc = window.location.href;
  return chatGUID = loc.substr(loc.indexOf('/chats/')+7);
}