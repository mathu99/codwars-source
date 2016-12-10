function smallest(n) {
    var currSmallest = n;
    var currSmallestIndex = 0;
    var indexMoved = 0;
    n = ""+n;
    for (var i = 0; i < n.length; i++){
      var found = smallestForThatNumber(i, n);
      if (found[0] < currSmallest){
        currSmallest = found[0];
        currSmallestIndex = i;
        indexMoved = found[1];
      }
    }
    return [currSmallest, currSmallestIndex, indexMoved];
}


function smallestForThatNumber(i, num){
  var smallest = +num;
  var smallestIndex = 0;
  var numberToMessWith = num.substr(0,i) + num.substr(i+1, num.length);
  for (x = 0; x < numberToMessWith.length+1; x++){
    var constructedNumber = +(numberToMessWith.substr(0,x) + num[i] + numberToMessWith.substr(x, numberToMessWith.length));
    if (constructedNumber < smallest){
      smallest = constructedNumber;
      smallestIndex = x;
    }
  }
  return [smallest, smallestIndex];
}