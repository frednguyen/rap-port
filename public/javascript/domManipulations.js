function displayCurrentUsers(usersObj) {
  $('#currentUsers').empty();
  for(key in usersObj) {
    if(key != user.uid){
      var userBtn = $('<button></button>')
      userBtn.attr({
        class: 'userBtn',
        'data-uid': key,
        'data-name': usersObj[key].name
      });
      userBtn.text(usersObj[key].name)
      userBtn.appendTo('#currentUsers')
    }
  };
};