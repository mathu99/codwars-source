function findOdd(A) {
  var oddIntegers = [];
  for (var i = 0; i < A.length; i++) {
    if (oddIntegers.indexOf(A[i]) == -1){
      oddIntegers.push(A[i]);
    }else{
      var index = oddIntegers.indexOf(A[i]);
      if (index > -1) {
          oddIntegers.splice(index, 1);
      }
    }
  }
  return oddIntegers[0];
}