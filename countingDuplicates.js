function duplicateCount(text){
  var duplicates = 0;
  var dupCheck = "";
  var duplicatesStr = "";
  for (i = 0; i < text.length; i++){
    if (dupCheck.indexOf(text[i].toLowerCase()) > -1 && duplicatesStr.indexOf(text[i].toLowerCase()) == -1){
      ++duplicates;
      duplicatesStr += text[i].toLowerCase();
    }
    dupCheck += text[i].toLowerCase();
  }
  return duplicates;
}