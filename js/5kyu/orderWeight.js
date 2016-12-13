function orderWeight(strng) {
    var arr = strng.split(" "),
    obj = [];
    for (i in arr){
      obj.push({
        val : arr[i], weight : weightedVal(""+arr[i])
      });
    }
    obj.sort(function(a, b){
      return a.weight === b.weight ? a.val.localeCompare(b.val) :  a.weight - b.weight;
    });
    var returnObj = [];
    obj.forEach(function(ele){ returnObj.push(ele.val)  });
    return returnObj;
}

function weightedVal(str){  //calculate weight of number
  return str.split("").map(Number).reduce(function(a, b) {
      return a + b;
  }, 0);
}