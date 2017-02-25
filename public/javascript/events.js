window.addEventListener('load', function() {
  initApp();
});

$('#st').on('click keypress', function() {
  var user = firebase.auth().currentUser;
  deleteUserInfo(user.uid)  
});

$('#sendMsg').on('click keypress', function() {
  var chatGUID = getChatGUID();
  var message = $('#message').val().trim();
  
  if(message == '') {
    return;
  }
  else{
    // firstMessage(chatGUID, message);
    sendMessage(chatGUID, message);
  }
  
});

$(document).on('click keypress','.userBtn', function() {
  var uid = $(this).attr('data-uid');
  var name = $(this).attr('data-name');
  console.log(user)
  initChatNodes(uid, name);
});

function goToChat(chatGUID) {
  window.location.href = "/chats/" + chatGUID;
};