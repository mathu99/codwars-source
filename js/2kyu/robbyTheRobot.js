function getCommands(field, power) {
  var tree = constructTree(getGrid(field));
}

function getGrid(field) {
  var grid = [];
  for (let i = 0; i < field.length; i+=Math.sqrt(field.length)) {
    grid.push(field.substring(i,i+Math.sqrt(field.length)).split(""));
  }
  return grid;
}

function constructTree(field) {
  var operations = "rlf"; //Right, Left, Forward
  var stackOfStates = []; //Store all states as to not have duplicates in tree
  row : for (let x = 0; x < field.length; x++) {
    col : for (let y = 0; y < field.length; y++) {
      if (field[x][y] == "S"){
        stackOfStates.push(""+x+""+y+"U");  //Starting point
        break row;
      }
    }
  }
  
  console.log(stackOfStates);
}