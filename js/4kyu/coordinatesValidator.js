function isValidCoordinates(coordinates){
  coordinates = coordinates.trim().split(",");
  return validateX(coordinates[0]) && validateY(coordinates[1]);
}

function validateX(x){
  var valid = !isNaN(x) && !anyIllegals(x);
  valid = valid && (x > -90 && x < 90 && x != 0);
  return valid;
}

function validateY(y){
  var valid = !isNaN(y) && !anyIllegals(y);
  valid = valid && (y > -180 && y < 180 && y != 0 );
  return valid; 
}

function anyIllegals(str){
  if (str.trim().indexOf("-") > 0)
    return true;
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  for (a = 0; a < alpha.length; a++){
    if (str.toLowerCase().indexOf(alpha[a]) > -1)
      return true;
  }
  return false;
}