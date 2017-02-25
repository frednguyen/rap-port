var User = function(userName, user_id) {
  this.userName = userName;
  this.user_id = user_id
};
var user;

var usersRef = firebase.database().ref('users');

usersRef.on('child_added', function(data) {
  getCurrentUsers();
});

usersRef.on('child_removed', function(data) {
  getCurrentUsers();
});

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

function setUserInfo(user_id, userName) {
  user = new User(userName, user_id);
  return firebase.database().ref('/users/' + user_id).update(user);
};

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

function getCurrentUsers() {
  usersRef.once('value').then(function(snapshot) {
    var usersObj = snapshot.val();
    displayCurrentUsers(usersObj)
  });
};

function initChat() {

}