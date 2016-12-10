snail = function(array) {
console.log("arr : "+array);
  var visitedIndexes = [];
  var path = [];
  return array.length == 1 ? array[0] : traverse(0, 0, "right", array, visitedIndexes, path); 
}

function traverse(startX, startY, direction, arr, visitedIndexes, path){
  console.log("curr_path "+path);
  if (startX == -1 && startY == -1){  //No writes possible GG
    return path;
  }
  var lastSuccessfulWrite = [-1, -1];
  if (direction == "right"){
    var end = 0;
    for (x = startX; x < arr.length; x++){
      end = x;
      if (!visitedAlready(x,startY,visitedIndexes)){
        path.push(arr[startY][x]);
        visitedIndexes.push({x:x, y:startY});
        lastSuccessfulWrite = [x, startY];
      }
    }
    traverse(lastSuccessfulWrite[0], lastSuccessfulWrite[1],"down",arr,visitedIndexes,path);
  }
  if (direction == "down"){
    for (x = 0; x < arr.length; x++){
      for (y = 0; y < arr.length; y++){
        if(x==startX && !visitedAlready(x,y,visitedIndexes)){
          path.push(arr[y][x]);
          visitedIndexes.push({x:x, y:y});
          lastSuccessfulWrite = [x,y];
        }
      }
    }//hit bottom
    traverse(lastSuccessfulWrite[0],lastSuccessfulWrite[1],"left",arr,visitedIndexes,path);
  }
  if (direction == "left"){
    for (var l = startX; l >= 0; l--){
        if(!visitedAlready(l,startY,visitedIndexes)){
          path.push(arr[startY][l]);
          visitedIndexes.push({x:l, y:startY});
          lastSuccessfulWrite = [l,startY];
        }
    }
    traverse(lastSuccessfulWrite[0],lastSuccessfulWrite[1],"up",arr,visitedIndexes,path);
  }
  if (direction == "up"){
    for (x = arr.length-1; x >= 0; x--){
      for (y = arr.length-1; y >= 0; y--){
        if(x==startX && !visitedAlready(x,y,visitedIndexes)){
          path.push(arr[y][x]);
          visitedIndexes.push({x:x, y:y});
          lastSuccessfulWrite = [x,y];
        }
      }
    }//hit bottom
    traverse(lastSuccessfulWrite[0],lastSuccessfulWrite[1],"right",arr,visitedIndexes,path);
  }
  return path;
}

function visitedAlready(x,y,visitedIndexes){
  for (a = 0; a < visitedIndexes.length; a++){
    if (visitedIndexes[a].x == x && visitedIndexes[a].y == y){
      return true;
    }
  }
  return false;
}