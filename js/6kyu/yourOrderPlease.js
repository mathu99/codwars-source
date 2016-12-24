function order(words){
  var strArr = [];
  var split = words.split(" ");
  for (i = 0; i < split.length; i++){
    for (x = 0; x < split[i].length; x++){
      if (!isNaN(split[i][x])){
        strArr[split[i][x]-1] = split[i];
      }
    }
  }
  return strArr.join(" ");
}