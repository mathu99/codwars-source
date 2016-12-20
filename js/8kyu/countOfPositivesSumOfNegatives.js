function countPositivesSumNegatives(input) {
    return input == null || input.length == 0 ? [] : [countPositive(input), sumNegative(input)];
}

function countPositive(input){
  var count = 0;
  for (i = 0; i < input.length; i++){
    count = input[i] > 0 ? count+1 : count;
  }
  return count;
}
function sumNegative(input){
  var total = 0;
  for (i = 0; i < input.length; i++){
    total = input[i] < 0 ? total+input[i] : total;
  }
  return total;
}