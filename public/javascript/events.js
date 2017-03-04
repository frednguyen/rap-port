window.addEventListener('load', function() {
  initApp();
});

$('#st').on('click keypress', function() {
  var user = firebase.auth().currentUser;
  deleteUserInfo(user.uid);
});

$('#slider').on('click', function() {
  console.log('test')
  $("#slider").sideNav();
  return false;
})

$('#sendMsg').on('click keypress', function() {
  var messageDiv = $('#message');
  var chatGUID = getChatGUID();
  var message = messageDiv.val().trim();
  if(message == '') {
    return false;
  }
  else{
    getMembers(chatGUID, message);
    messageDiv.val('');
    return false;
  }
});

$(document).on('click keypress','.userBtn', function() {
  var uid = $(this).attr('data-uid');
  var name = $(this).attr('data-name');
  var href = $(this).attr('href');

  if(href == '#'){
    userSelecting = user.uid;
    initChatNodes(uid, name);
  }
});

function goToChat(chatGUID) {
  window.location.href = "/chats/" + chatGUID;
};