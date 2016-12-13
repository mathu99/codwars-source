function calc(expr) {
  var nums = [],
  rpn = expr.split(" ");
  for (i = 0; i < rpn.length; i++){
    if("+-/*".indexOf(rpn[i]) == -1){  //push numbers
      nums.push(+rpn[i]);
    }else{
      var first = nums.pop();
      var second = nums.pop();
      switch(rpn[i]){
        case "+" : { nums.push(first+second) } break;
        case "-" : { nums.push(second-first) } break;
        case "*" : { nums.push(first*second) } break;
        case "/" : { nums.push(second/first) } break;
      }
    }
  }
  return nums.length == 0 ? 0 : nums.pop();
}