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
  mainChat = chatGUID;
  if(message == '') {
    return;
  }
  else{
    // firebase.database().ref('/messages/' + mainChat).on('child_added', function(data) {
    //   console.log(data.val())
    // })
    getMembers(chatGUID, message);
  }
});

$(document).on('click keypress','.userBtn', function() {
  var uid = $(this).attr('data-uid');
  var name = $(this).attr('data-name');
  userSelecting = user.uid;
  console.log(user.uid)
  initChatNodes(uid, name);
});

function goToChat(chatGUID) {
  window.location.href = "/chats/" + chatGUID;
};