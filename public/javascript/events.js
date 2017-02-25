window.addEventListener('load', function() {
  initApp();
});

$('#st').on('click keypress', function() {
  var user = firebase.auth().currentUser;
  deleteUserInfo(user.uid)  
});

$(document).on('click keypress','.userBtn', function() {
  var uid = $(this).attr('data-uid');
  var userName = $(this).attr('data-name');
  initChatNodes(uid, userName);
});

function goToChat() {
  $.get('/chats/' + key, function() {});
}