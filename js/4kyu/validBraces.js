function validBraces(braces){
  var valid = true;
  var currString = braces;
  while (currString.length > 0 && valid){
    var validate = validateStr(currString);
    currString = validate[0];
    valid = validate[1];
  }
  return valid;
}

//finds the partner
function validateStr(str){
  var parentheses = "()[]{}";
  for (i = 0; i < str.length-1; i++){
    if (parentheses.indexOf(str[i]) == parentheses.indexOf(str[i+1])-1){
      return [str.substr(0,i)+str.substr(i+2,str.length),true];
    }
  }
  return [str,false];
}