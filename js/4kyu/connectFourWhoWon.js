function connectFour(board) {
  var vert = new Array(7);
  for (i = 0; i < vert.length; i++){
    vert[i] = new Array(6);
  }
  var containsBlanks = false;
  for (x = 0; x < board.length; x++){
    for (y = 0; y < board[x].length; y++){
      var diagonalWin = diagonalWinner(board, x, y, "R");
      diagonalWin = diagonalWin == "R" ? "R" : diagonalWinner(board, x, y, "Y");  //If no red diagonal, try Yellow
      if (diagonalWin != null) {
        return diagonalWin;
      }
      if(y == 0){  //horizontal check
        if (board[x].join("").indexOf("RRRR") > -1){
          return "R";
        }else if (board[x].join("").indexOf("YYYY") > -1){
          return "Y";
        }
      }
      containsBlanks = containsBlanks || board[x][y] == '-'; 
      vert[y].push(board[x][y]);
    }
  }
  for (i = 0; i < vert.length; i++){  //vertical check
    if (vert[i].join("").indexOf("RRRR") > -1){
          return "R";
    }else if (vert[i].join("").indexOf("YYYY") > -1){
          return "Y";
    }
  }
  return containsBlanks == true ? "in progress" : "draw";
}

function diagonalWinner(board, x, y, color) {
  var count = 0;
  var xToCheck = x, yToCheck = y;
  for (a = 0; a < board.length; a++){
    for (b = 0; b < board[a].length; b++){
      if (a == xToCheck && b == yToCheck){
        count = board[a][b] == color ? count + 1 : 0;
        ++xToCheck;
        ++yToCheck;
      }
      if (count == 4){
        return color;
      }
    }
  }
  xToCheck = x, yToCheck = y, count = 0;
  board = board.reverse();
  for (a = 0; a < board.length; a++){
    for (b = 0; b < board[a].length; b++){
      if (a == xToCheck && b == yToCheck){
        count = board[a][b] == color ? count + 1 : 0;
        ++xToCheck;
        ++yToCheck;
      }
      if (count == 4){
        return color;
      }
    }
  }
  return null;
}