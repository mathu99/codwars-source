function isValidIP(str) {
  return str.indexOf(" ") > -1 ? false : str.split(".").length == 4 ? validateForEach(str.split(".")) : false;;
}

function validateForEach(ip){
  var valid = true;
  for (i = 0; i < ip.length; i++){
    valid = valid && validateNumber(ip[i]);
  }
  return valid;
}

function validateNumber(num){
  return !isNaN(num) && num < 256 && num >= 0 ;
}