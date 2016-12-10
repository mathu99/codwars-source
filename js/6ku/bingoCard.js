function getCard()
{
  var  randoms = getForLetter(5,"B",1,15);
  randoms = randoms.concat(getForLetter(5,"I",16,30));
  randoms = randoms.concat(getForLetter(4,"N",31,45));
  randoms = randoms.concat(getForLetter(5,"G",46,60));
  randoms = randoms.concat(getForLetter(5,"O",61,75));
  return randoms;
}

function getForLetter(count, letter, min, max){
  var returnArr = [];
  for (i = 0; i < count; i++){
    returnArr.push(letter+randomUnassignedNumber(min, max, returnArr));
  }
  return returnArr;
}

function randomUnassignedNumber(min, max, currentNumbers){
  while (true){
    var random = (Math.random() * (max - min) + min).toFixed(0);  //random number in range
    var found = false;
    for (i = 0; i < currentNumbers.length; i++){
      if (+(currentNumbers[i].substr(1,currentNumbers[i].length)) == random){
        found = true; break;
      }
    }
    if(!found){
      return random;
    }
  }
}