function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  var birdsNew = [];
  for (i = 0; i < birds.length; i++){
    if (!geese.contains(birds[i]))
      birdsNew.push(birds[i]);
  }
  return birdsNew;
};