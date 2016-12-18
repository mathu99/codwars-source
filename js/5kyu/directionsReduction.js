function dirReduc(arr){
  var stack = [];
  stack.push(arr[0]);
  for (i = 1; i < arr.length; i++){
    var pop = stack[stack.length-1];
    if  ((arr[i] == "SOUTH" && pop == "NORTH") || 
        (arr[i] === "NORTH" && pop === "SOUTH") || 
        (arr[i] === "EAST" && pop === "WEST") || 
        (arr[i] === "WEST" && pop === "EAST")){
        stack.pop();
      }else{
        stack.push(arr[i]);
      }
  }
  return stack;
}