function removeZeros(array) {
  var str = "", index = 0;
  for (i = 0; i < array.length; i++){
    if (array[i] === 0){
      str+="x";
    }else if (array[i] === "0"){
      str+="y";
    }else{
      array[index++] = array[i];
    }
  }
  for (x = 0; x < str.length; x++){
    if (str[x] == "x"){
      array[index++] = 0;
    }else if (str[x] == "y"){
      array[index++] = "0";
    }
  }
  return array;
}