function displayCurrentUsers(usersObj) {
  $('#availableUsers').empty();
  for(key in usersObj) {
    if(key != user.uid){
      var userBtn = $('<a></a>')
      userBtn.attr({
        class: 'userBtn collection-item',
        'data-uid': key,
        'data-name': usersObj[key].name,
        href: '#'
      });
      userBtn.text(usersObj[key].name)
      userBtn.appendTo('#availableUsers')
    }
  };
};

function getNotification(friend, me, chat) {
  var userBtn = $('[data-uid='+ me +']');
  userBtn.attr({
    href: 'chats/'+chat
  })
  // userBtn.empty();
  var notification = $('<span></span>');
  notification.addClass('new badge');
  notification.text('1');
  notification.appendTo(userBtn);
  // $('#availableUsers').empty();
};

function displayMessage() {
  
}