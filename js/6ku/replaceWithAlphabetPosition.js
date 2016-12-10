function alphabetPosition(text) {
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var returnStr = "";
  for (i = 0; i < text.length; i++){
    var x = alpha.indexOf(text[i].toLowerCase());
    if (x != -1){
      returnStr += (x+1) + " ";
    }
  }
  return returnStr.substr(0, returnStr.lastIndexOf(" "));
}