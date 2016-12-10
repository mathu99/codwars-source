function scramble(str, arr) {
  var constructedString = "";
  for (i = 0; i < str.length; i++){
    for (x = 0; x < arr.length; x++){
      if (arr[x] == i){
        constructedString += str[x];
      }
    }
  }
  return constructedString;
};