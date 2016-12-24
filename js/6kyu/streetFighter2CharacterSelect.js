function streetFighterSelection(fighters, position, moves){
  var xIndex = position[0], yIndex = position[1],
  charHover = [];
  for (i = 0; i < moves.length; i++){
    switch(moves[i]){
      case "up" : {  
        yIndex = 0;
      } break;
      case "down" : { 
        yIndex = 1;
      } break;
      case "left" : { 
        xIndex = (xIndex == 0) ? fighters[0].length-1 : xIndex-1;
      } break;
      case "right" : { 
        xIndex = (xIndex == fighters[0].length-1) ? 0 : xIndex+1;
      } break;
    }
    charHover.push(fighters[yIndex][xIndex]);
  }
  return charHover;
}