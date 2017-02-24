$('#st').on('click', function() {
  console.log('wowza')
  var user = firebase.auth().currentUser;
  deleteUserInfo(user.uid)  
});