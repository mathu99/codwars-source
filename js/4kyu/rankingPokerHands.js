var Result = { "win": 1, "loss": 2, "tie": 3 }

function PokerHand(hand) {
  this.hand = hand;
}

function score(input) {
  debugger;
  var rep = new Array(52).fill(0);  //['2222', '3333', etc]
  var suiteRank = "CDHS" //club diamond heart spade
  input = input.split(" ");
  for (let i = 0; i < input.length; i++) {
    var index = 0;
    switch(input[i][0]){
     case 'T' : index = 10; break;
     case 'J' : index = 11; break;
     case 'Q' : index = 12; break;
     case 'K' : index = 13; break;
     case 'A' : index = 14; break;
     default : index = +input[i][0];
   }
   index = ((index-1) * 4 - suiteRank.indexOf(input[i][1]) -1);  //where to fill bit
   rep[index] = 1;
  }
  input = input.join("");  
  var max = maxOfAKind(input);
  if (straightFlush(rep) != -1) return straightFlush(rep) + 900;  //straight flush
  if (max[0] == 4) return (800 + convert(max[1]) + highCard(input)); //four of a kind
  if (max[0] == 3) {  //full house
    var secBatch = maxOfAKind(input, max[1]);
    if (secBatch[0] == 2){
      return (700 + convert(max[1]) + convert(secBatch[1]) + highCard(input));
    }
    return (400 + convert(max[1]) + highCard(input));  //three of a kind
  }
  if (flush(input) != "") return 600 + highCard(input);
  if (straight(input) != -1) return 500 + straight(input) ;
  if (max[0] == 2) { 
    var secBatch = maxOfAKind(input, max[1]);
    if (secBatch[0] == 2){
      return (300 + convert(max[1]) + convert(secBatch[1]) + highCard(input));  //two pair
    }
    return (200 + convert(max[1]) + highCard(input));  //pair
  }
  return highCard(input);
}
//1. Royal flush 2. Straight flush 3. Four of a kind 4. Full house 5. Flush 6. Straight 7. Three of a kind 8. Two pair 9. Pair  10. High Card 

function highCard(input){
  var arr = []; 
  for (let i = 0; i < input.length; i+=2){
    arr.push(convert(input[i]));
  }
  arr = arr.sort(sortNumber);
  return arr[0] + arr[1] / 10 + arr[2] / 100 + arr[3] / 1000 + arr[4] / 10000;
}

function sortNumber(a,b) {
    return b - a;
}

function straightFlush(cards) {
  return cards.join("").indexOf("1000100010001000");
}

function straight(cards){
  var straightPatter = "23456789TJQKA";
  var val = [];
  for (let i = 0; i < cards.length; i+=2){
    val.push(convert(cards[i]));
  }
  val = val.sort(sortNumber).join("");
  val = val.replace("14","A").replace("13","K").replace("12","Q").replace("11","J").replace("10","T");
  val = val.split("").reverse().join("");
  return straightPatter.indexOf(val);
}

function flush(cards) {
  for (let i = 0; i < cards.length; i++){
    if ("CDHS".indexOf(cards[i]) > -1){
      var count = (cards.match(new RegExp(cards[i], "g")) || []).length;
      if (count == 5)
        return cards[i];
    }
  }
  return "";
}

function maxOfAKind(cards, exclude) {
  var max = 0,
  type = null,
  suite = "";
  for (let i = 0; i < cards.length; i+=2){
    var check = (cards.match(new RegExp(cards[i], "g")) || []).length;
    if (check > max && cards[i] != exclude && cards[i]){
      max = check;
      type = cards[i];
    }
  }
  return [max, type];
}

function convert(type){
  switch(type){
     case 'T' : return 10; break;
     case 'J' : return 11; break;
     case 'Q' : return 12; break;
     case 'K' : return 13; break;
     case 'A' : return 14; break;
     default : return +type;
   }
}

PokerHand.prototype.compareWith = function(hand){
  return score(this.hand) > score(hand.hand) ? Result.win : score(this.hand) < score(hand.hand) ? Result.loss : Result.tie;
}