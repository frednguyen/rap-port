function displayCurrentUsers(usersObj) {
  $('#currentUsers').empty();
  for(key in usersObj) {
    if(key != user.uid){

    
      // console.log(usersObj[key].userName)
      var userBtn = $('<button></button>')
      userBtn.attr({
        class: 'userBtn',
        'data-uid': key,
        'data-name': usersObj[key].userName
      });
      userBtn.text(usersObj[key].userName)
      userBtn.appendTo('#currentUsers')
    }
  };
};