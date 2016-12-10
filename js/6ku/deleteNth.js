function deleteNth(arr,x){
  var newArr = [];
  for (i = 0; i < arr.length; i++){
    if(!alreadyEnough(newArr, arr[i], x)){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function alreadyEnough(newArr, element, count){
  var counter = 0;
  for (x = 0; x < newArr.length; x++){
    if (newArr[x] == element){
      ++counter;
    }
  }
  return counter >= count;
}