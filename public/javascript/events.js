window.addEventListener('load', function() {
  initApp();
});

$('#st').on('click keypress', function() {
  var user = firebase.auth().currentUser;
  deleteUserInfo(user.uid)  
});

$('#sendMsg').on('click keypress', function() {
  console.log(test)
});

$(document).on('click keypress','.userBtn', function() {
  var uid = $(this).attr('data-uid');
  var userName = $(this).attr('data-name');
  initChatNodes(uid, userName);
});

function goToChat(chatGUID) {
  $.get('/chats/' + chatGUID, function(data) {});
  window.location.href = "/chats/" + chatGUID;
};