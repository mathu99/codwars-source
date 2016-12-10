function isValidWalk(walk) {
  var forward = 0;
  var left = 0;
  for (i = 0; i < walk.length; i++){
    switch(walk[i]){
      case 'n' : { ++forward } break;
      case 's' : { --forward } break;
      case 'e' : { ++left } break;
      case 'w' : { --left } break;
    }
  }
  return walk.length == 10 && forward == 0 && left == 0;
}