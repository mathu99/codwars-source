var recoverSecret = function(triplets) {
    var traversed = [];
    var traversedStr = [];
    var traversedCount = 0;
    for (x1 = 0; x1 < triplets.length; x1++){
      for (y1 = 0; y1 < triplets[0].length; y1++){
        if (traversed.indexOf(triplets[x1][y1]) == -1){
          traversed[traversedCount] = triplets[x1][y1];
          traversedStr[traversedCount] = whatComesBefore(triplets[x1][y1],triplets);
          traversedCount++;
        }
      }
    }
    
    var returnStr = "";
    for (i = 0; i < traversed.length; i++){
      if (traversedStr[i].length == 0){
        returnStr += traversed[i];
        returnStr = findNextAndCleanUp(returnStr, traversed, traversedStr);
        break;
      }
    }
    return returnStr;
}

function findNextAndCleanUp(currStr, traversed, traversedStr, allEmpty){ 
  var allEmpty = true;
  for (a = 0; a < traversed.length; a++){
    allEmpty = allEmpty && traversedStr[a].length == 0;
    if (traversedStr[a].length == 1 && traversedStr[a][0] == currStr[currStr.length-1]){
      traversedStr = dropThis(traversedStr[a][0], traversedStr);
      currStr+=traversed[a][0];
      return findNextAndCleanUp(currStr, traversed, traversedStr);
    }
  }
    return currStr;
}

function dropThis(charToDrop, traversedStr){
  for (b = 0; b < traversedStr.length; b++){
    traversedStr[b] = traversedStr[b].replace(charToDrop, "");
  }
  return traversedStr;
}

function whatComesBefore(char, triplets){
  var fullConstruct = "";
  for (x = 0; x < triplets.length; x++){
      var constructed = "";
      for (y = 0; y < triplets.length; y++){
        if (triplets[x][y] == char){
          fullConstruct += constructed;
          break;
        }else{
          constructed += triplets[x][y];
        }
      }
    }
    return unique(fullConstruct);
}

function unique(str) {
  var result = '';
  for(var i = 0; i < str.length; i++) {
    if(result.indexOf(str[i]) < 0) {
      result += str[i];
    }
  }
  return result;
}