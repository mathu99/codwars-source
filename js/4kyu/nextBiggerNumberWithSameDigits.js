function nextBigger(n) {
  var numParts = (""+n).split(""), i;
  for (i = numParts.length-1; i > 0; i--){   
    if (+numParts[i-1] < +numParts[i]){
      break;
    }
  }
  i=i-1;
  if (i == -1){
    return -1;
  }
  var returnVal = (""+n).substr(0,i);
  debugger;
  var rhs = numParts.splice(i+1), min = 10, minIndex = -1;
  for (x = 0; x < rhs.length; x++) {
    if (+rhs[x] < min && +rhs[x] > (""+n)[i]){
      min = rhs[x];
      minIndex = x;
    }
  }
  
  if (min == 10) return -1;
  rhs.splice(minIndex, 1);
  rhs.push((""+n)[i]);
  rhs = rhs.sort();
  returnVal+=min+rhs.join("");
  return +returnVal;
}