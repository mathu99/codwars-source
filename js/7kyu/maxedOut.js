function maxedOut(arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++){
    sum += Math.pow(arr[i],3);  //cube
  }
  return sum >= 9007199254740992 ? "You've pushed me to the max!" : sum;
}