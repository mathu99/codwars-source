//https://www.codewars.com/kata/find-the-smallest/train/javascript
function smallest(n) {
    console.log(n);
    var currSmallest = +n;
    var currSmallestIndex = 0;
    var indexMoved = 0;
    
    for (x = 0; x < (""+n).length; x++){
      for (y = 0; y < (""+n).length; y++){
           var newNum = createNumber(x, y, (""+n));  
      }
    }
    /*for (x = 0; x < (""+n).length; x++){
      for (y = 0; y < (""+n).length; y++){
        var newNum = createNumber(x, y, (""+n));   
        if (newNum < currSmallest){
          currSmallest = newNum;
          currSmallestIndex = x;
          indexMoved = y;
        }
      }
    }
    
     
    if (indexMoved == 1 && currSmallestIndex == 0) {
      indexMoved = 0;
      currSmallestIndex = 1;
    }
    var arr = [parseInt(currSmallest), indexMoved, currSmallestIndex];
    return arr;*/
}

function createNumber(x, y, n) {
  //var num = n.substr(0, x);
  //num += n[y];
  for (i = x; i < n.length; i++){
    if (i != y){
      num += n[i];
    }
  }
  //console.log(x + " " + y + " " + num);
  return num;
}