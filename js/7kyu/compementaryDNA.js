String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function DNAStrand(dna){
  //your code here
    var rtrStr = "";
    for (i = 0; i < dna.length; i++){
      if (dna[i] == "A"){
        rtrStr += "T";
      }else if (dna[i] == "T"){
        rtrStr += "A";
      }else if (dna[i] == "C"){
        rtrStr += "G";
      }else if (dna[i] == "G"){
        rtrStr += "C";
      }else{
        rtrStr += dna[i];
      }
  }
    return rtrStr;
}