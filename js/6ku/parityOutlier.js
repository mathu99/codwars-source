function findOutlier(integers){
  var even = ((integers[0] % 2 == 0 && integers[1] % 2 == 0) ||
            (integers[0] % 2 == 0 && integers[2] % 2 == 0) ||
            (integers[1] % 2 == 0 && integers[2] % 2 == 0));
  return findParity(even,integers);
}

function findParity(even, integers){
  for (i in integers){
    if (even && integers[i] % 2 != 0){
      return integers[i];
    }else if (!even && integers[i] % 2 == 0){
       return integers[i];
    }
  }
}