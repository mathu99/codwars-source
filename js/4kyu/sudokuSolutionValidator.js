function validSolution(board){
   var valid = true;  //assume valid 
   var cols = [];
   var blocks = [];
   for (x = 0; x < board.length; x++){  //for each row in grid
      valid = valid && allValid(board[x].map(String));  //validate row
      for (y = 0; y < board[0].length; y++){
        if (x <= 2 && y <= 2) { blocks[0] += ""+board[x][y] }
        else if (x > 2 && x < 6 && y <= 2) { blocks[1] += ""+board[x][y] }
        else if (x >= 6 && y <= 2) { blocks[2] += ""+board[x][y] }    
        else if (x <= 2 && y > 2 && y < 6) { blocks[3] += ""+board[x][y] } 
        else if (x > 2 && x < 6 && y > 2 && y < 6) { blocks[4] += ""+board[x][y] }    
        else if (x >= 6 && y > 2 && y < 6) { blocks[5] += ""+board[x][y] } 
        else if (x <= 2  && y >= 6) { blocks[6] += ""+board[x][y] }  
        else if (x > 2 && x < 6 && y >= 6) { blocks[7] += ""+board[x][y] }  
        else if (x >= 6 && y >= 6) { blocks[8] += ""+board[x][y] }  

        cols[y] += ""+board[x][y];
        if (x+1 == board.length){
          valid = valid && allValid(cols[y].replace("undefined",""));  //validate col
          valid = valid && allValid(blocks[y].replace("undefined","")); //validate blocks
        }
      }
    }
  return valid;
}

function allValid(row){  //validate an array of numbers
  var knowledge = "";
  for (a = 0; a < row.length; a++){
    if (row[a] == 0 || knowledge.indexOf(row[a]) != -1){
      return false;
    }else{
      knowledge += row[a];
    }
  }
  return true;
}