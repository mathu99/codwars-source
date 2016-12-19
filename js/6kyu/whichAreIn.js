function inArray(array1,array2){
  var whole = [];
  for (x = 0; x < array1.length; x++){
    if (contains(array1[x], array2)){
      whole.push(array1[x]);
    }
  }
  return whole.sort();
}

function contains(str, arr){
  for(i = 0; i < arr.length; i++){
    if (arr[i].indexOf(str) != -1){
      return true;
    }
  }  
  return false;
}