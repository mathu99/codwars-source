const helloWorld = () => {
  var intArr = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33];
  var str = String.fromCharCode(intArr[0]);
  for (i = 1; i < intArr.length; i++){
    str+=String.fromCharCode(intArr[i]);
  }
  return str;
};