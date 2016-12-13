function range(){
  var returnArr = [];
  var start = arguments.length != 1 ? arguments[0] : 1; //where to start 
  var end = arguments[arguments.length-1];  //last param is end
  for (var i = start; i <= end; i++) {
    if (arguments.length != 3 || (arguments.length == 3 && (i-start) % arguments[1] == 0))
      returnArr.push(i);
  }
  return returnArr;
}