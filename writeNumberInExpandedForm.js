//Still to submit
function expandedForm(num) {
  num += "";
  var returnStr = "";
  for (i = 0; i < num.length; i++){
    if(+num[i] != "0"){
      returnStr += num[i] + addZeros(num.length-1 - i);
    }
  }
  return returnStr.endsWith(" + ") ? returnStr.substr(0,returnStr.length-3) : returnStr;
}

function addZeros(count){
  var str = "";
  for (x = 0; x < count; x++){
    str += "0";
  }
  if (str.length > 0){
    str += " + ";
  }
  return str;
}