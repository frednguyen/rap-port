window.addEventListener('load', function() {
  initApp();
});

$('#st').on('click', function() {
  var user = firebase.auth().currentUser;
  deleteUserInfo(user.uid)  
});