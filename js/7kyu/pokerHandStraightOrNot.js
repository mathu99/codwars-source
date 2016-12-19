function isStraight(cards){
  var newCards = [];
  for (i = 0; i < cards.length; i++){
    if (cards[i] == 14) newCards.push(1);
    else if (cards[i] == 1) newCards.push(14);
    if (newCards.indexOf(cards[i]) == -1){
      newCards.push(cards[i]);
    }
  }
  cards = newCards.sort(sortNumber);
  var counter = 0;
  for (i = 0; i < cards.length-1; i++){
    if(cards[i] == 14)
      cards[i] = 1;
    debugger;
    if (cards[i+1] == cards[i]+1){
      counter++;
    }else{
      counter = 0;
    }
    if (counter == 4)
      return true;
  }
  return false;
}

function sortNumber(a,b) {
    return a - b;
}