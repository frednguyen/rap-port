function displayCurrentUsers(usersObj) {
  $('#currentUsers').empty();
  for(key in usersObj) {
    var userBtn = $('<button></button>')
    userBtn.attr({
      class: 'userBtn',
      'data-uid': key
    });
    userBtn.text(usersObj[key].userName)
    userBtn.appendTo('#currentUsers')
  }
}