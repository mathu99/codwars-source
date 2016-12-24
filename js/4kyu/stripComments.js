function solution(input, markers){
  var lines = input.split("\n");  
  for (x = 0; x < lines.length; x++){  //for each line
    for (i = 0; i < markers.length; i++){ //remove marker from each line
      lines[x] = stripForChar(lines[x], markers[i]);
    }
  }
  return lines.length > 1 ? lines.join("\n") : lines;
}

function stripForChar(input, marker){
  var returnStr = "";
  var split = input.split(marker);
  return split[0].trim();
}