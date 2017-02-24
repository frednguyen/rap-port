window.addEventListener('load', function() {
  initApp();
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
  var postData = {
    userName: userName
  };
  var updates = {}
   updates['/users/' + user_id] = postData;
  return firebase.database().ref().update(updates);
};

function deleteUserInfo(user_id){
  console.log('deleting info for: ', user_id)
  var userRef = firebase.database().ref("users");
  userRef.once("value")
    .then(function(snapshot) {
      var name = snapshot.ref.child(user_id).remove();
      firebase.auth().signOut().then(function() {
        console.log()
        initApp();
      }, function(error) {
        if(error){throw error}
    });
  });
};

