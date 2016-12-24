function getStartTime(schedules, duration) {
  // TODO
}

function stringToMinutes(str){  //converts to an integer format
  var split = str.split(":");
  return (split[0]*60 + +split[1]);
}

function minutesToString(minutes){  //returns displayable format
  var hours = (""+minutes / 60).split(".")[0];
  hours = hours.length == 1 ? "0"+hours : hours;
  var mins = (""+minutes % 60);
  mins = mins.length == 1 ? "0"+mins : mins;
  return hours+":"+mins;
}