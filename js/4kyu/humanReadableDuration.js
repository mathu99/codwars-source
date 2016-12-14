function formatDuration (sec) {
  return sec=="" ? "now" : replaceLastComma(seconds(minutes(hours(days(years(sec))))));
}

function replaceLastComma(input) {
    if(input.trim()[input.trim().length-1] == ","){
      input = input.substr(0,input.length-2);
    }
    var pos = input.lastIndexOf(",");
    if (pos == input.length-2){
      return input.substring(0, pos);
    }
    return pos > -1 ? input.substring(0, pos) + " and " + input.substring(pos + 1).trim() : input;
}

function years(input){
  return (input / 31536000 >= 1) ? [(""+(input / 31536000)).split(".")[0] + " year"+extraS(input / 31536000)+", ",  input % 31536000] : ["", input];   
}

function days(input){
  return (input[1] / 86400 >= 1) ? [input[0] + (""+(input[1] / 86400)).split(".")[0] + " day"+extraS(input[1] / 86400)+", ",  input[1] % 86400] : [input[0], input[1]];   
}

function hours(input){
  return (input[1] / 3600 >= 1) ? [input[0] + (""+(input[1] / 3600)).split(".")[0] + " hour"+extraS(input[1] / 3600)+", ",  input[1] % 3600] : [input[0], input[1]];   
}

function minutes(input){
  return (input[1] / 60 >= 1) ? [input[0] + (""+(input[1] / 60)).split(".")[0] + " minute"+extraS(input[1] / 60)+", ",  input[1] % 60] : [input[0], input[1]];   
}

function seconds(input){
  return input[1] > 0 ? input[0] + input[1] + " second"+extraS(input[1]) : input[0];
}

function extraS(input){
  return input >= 2 ? "s" : "";
}