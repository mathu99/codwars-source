function findMissingLetter(array) {
  var curr = array[0].charCodeAt(0);
  for (i = 1; i < array.length; i++){
    if (curr+1 != array[i].charCodeAt(0)){
      return String.fromCharCode(curr+1);
    }
    curr = array[i].charCodeAt(0);
  }
}