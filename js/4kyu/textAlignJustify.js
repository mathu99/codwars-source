var justify = function(str, len) {  
  var rows = [], rowCount = 0, str = str.split(" ");
   rows[0] = "";
   for (i = 0; i < str.length; i++) {
    if (rows[rowCount].length+str[i].length < len){
      rows[rowCount] += rows[rowCount].length == 0 ? str[i] : " " + str[i];
    }else{
      rows[rowCount] = enrichRow(rows[rowCount], len);
      rows.push(str[i]);
      ++rowCount;
    }
   }
   return rows.join("\n");
   return str;
};

function enrichRow(row, len) {
  if (row.indexOf(" ") == -1){
    return row;
  }
  var newArr = [], count = row.length;
  for (x = 0; x < row.split(" ").length; x++){
    newArr.push(row.split(" ")[x]);
    if (x+1 != row.split(" ").length){
      newArr.push(" ");
    }
  }
  var y = 0;
  while (count != len){
    if (newArr[y].indexOf(" ") > -1){
      newArr[y] += " ";
      ++count;
    }
    y = (y+1 == newArr.length) ? 0 : y+1;
  }
  return newArr.join("");
}