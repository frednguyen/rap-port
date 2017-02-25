// User constructor
var User = function(userName, uid) {
  this.userName = userName;
  this.uid = uid
};
// Initialize a global empty user
var user;

// Firebase references
var usersRef = firebase.database().ref('users');
var chatRef = firebase.database().ref('chats');

// db listeners to react to users signed on/out
usersRef.on('child_added', function(data) {
  getCurrentUsers();
});

usersRef.on('child_removed', function(data) {
  getCurrentUsers();
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
function setUserInfo(user_id, userName) {
  user = new User(userName, user_id);
  return firebase.database().ref('/users/' + user_id).update(user);
};

// delete user info when logged out
function deleteUserInfo(user_id) {
  console.log('deleting info for: ', user_id)
  var userRef = firebase.database().ref("users");
  userRef.once("value")
    .then(function(snapshot) {
      var name = snapshot.ref.child(user_id).remove();
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

function initChatNodes(uid, userName) {
  // generate chat key
  var newPostKey = firebase.database().ref().push().key;
  var chats = {
    timestamp: Date.now()
  };
  var members = {};
  members[uid] = true;
  members[user.uid] = true;
  firebase.database().ref('/chats/' + newPostKey).update(chats);
  firebase.database().ref('/members/' + newPostKey).update(members);
  goToChat(newPostKey);
};