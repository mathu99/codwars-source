function humanReadable(seconds) {
  var date = new Date(seconds*1000);
  if (seconds <= 86399){
    return fullNumber(date.getHours())+":"+fullNumber(date.getMinutes())+":"+fullNumber(date.getSeconds());
  }else{
    var days = (seconds / 86400).toFixed(0);
    var rest = seconds % 86400;
    var date = new Date(rest*1000);
    return fullNumber(days*24 + date.getHours())+":"+fullNumber(date.getMinutes())+":"+fullNumber(date.getSeconds());
  }
}

function fullNumber(number){
  return (""+number).length == 1 ? ("0"+number) : ""+number;
}