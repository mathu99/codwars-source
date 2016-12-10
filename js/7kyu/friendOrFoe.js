function friend(friends){
  var friendsArr = [];
  for (i = 0; i < friends.length; i++){
    if (friends[i].length == 4)
      friendsArr.push(friends[i]);
  }
  return friendsArr;
}