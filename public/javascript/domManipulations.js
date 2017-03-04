function displayCurrentUsers(usersObj) {
  $('#availableUsers').empty();
  for(key in usersObj) {
    var name = usersObj[key].name;
    var uid = usersObj[key].uid;
    var photoURL = usersObj[key].photoURL;
    if(key != user.uid){
      // var line = $('<li></li>');
      var userBtn = $('<a></a>');
      
      userBtn.attr({
        class: 'userBtn collection-item',
        'data-uid': uid,
        'data-name': name,
        href: '#',
        // style: 'padding: 0px;'
      });
      
      userBtn.text(name)
      // userBtn.appendTo(line);
      userBtn.appendTo('#availableUsers')

      // var userBtn = $('<a></a>');
      // var li = $('<li></li>')
      // var row = $('<div></div>');
      // var photoDiv = $('<div></div>');
      // var userPhoto = $('<img>');
      // var userDiv = $('<div></div>');
      // var notificationDiv = $('<div></div>');

      // row.addClass('row userBtnRow');
      // userBtn.attr({
      //   class: 'userBtn collection-item',
      //   'data-uid': uid,
      //   'data-name': name,
      //   href: '#',
      //   style: 'padding: 0px;'
      // });
      // userPhoto.attr({
      //   src: photoURL,
      //   class: 'circle responsive-img userPhoto',
      // });
      // userDiv.addClass('col s7 btnUserName');
      // photoDiv.addClass('col s3');
      // userDiv.text(name)
      // notificationDiv.addClass('col s2 notification')

      // userPhoto.appendTo(photoDiv)
      // row.appendTo(userBtn);
      // photoDiv.appendTo(row);
      // userDiv.appendTo(row);
      // notificationDiv.appendTo(row)
      // li.appendTo('#availableUsers')
      // userBtn.appendTo(li)
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
  notification.attr({
    class: 'secondary-content new badge orange accent-4',
    style: 'margin-top: auto'
  });
  notification.text('1');
  // notification.appendTo(userBtn.children('.row').children('.notification'));
  notification.appendTo(userBtn);
  // $('#availableUsers').empty();
};

function displayMessage(name, message, mid, photoURL) {
  var messagesCardContent = $('#messagesCardContent');
  var messageFillerSpan = $('#message-filler');

  var photoDiv = $('<div></div>');
  var userPhoto = $('<img>');
  var messageContainerDiv = $('<div></div>');
  var messageDiv = $('<div></div>');
  var nameDiv = $('<div></div>');

  photoDiv.addClass('col s2')
  userPhoto.attr({
        src: photoURL,
        class: 'circle userPhoto',
        style: 'height: 50px'
  });
  messageContainerDiv.attr({
    class: 'message-container row',
    id: mid
  });
  messageDiv.addClass('message col s10');
  nameDiv.addClass('name');

  messageDiv.text(message);
  nameDiv.text(name);

  userPhoto.appendTo(photoDiv);
  messageContainerDiv.appendTo(messageFillerSpan);

  photoDiv.appendTo(messageContainerDiv);
  messageDiv.appendTo(messageContainerDiv);
  nameDiv.appendTo(messageContainerDiv); 

  updateScroll(messagesCardContent);
}

function updateScroll(div){
  div.scrollTop(div[0].scrollHeight);
}