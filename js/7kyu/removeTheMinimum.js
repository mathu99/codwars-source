function removeSmallest(numbers) {
  var smallestIndex = 0;
  var smallest = numbers[smallestIndex];
  for (i = 1; i < numbers.length; i++){
    if (numbers[i] < smallest){
      smallestIndex = i;
      smallest = numbers[i];
    }
  }//smallest found 
  
  var newArr = [];
  var added = false;
  for (i = 0; i < numbers.length; i++){
    if (i != smallestIndex){
      newArr.push(numbers[i]);
    }
  }
  return newArr;
}