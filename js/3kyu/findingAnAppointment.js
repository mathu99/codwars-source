function getStartTime(schedules, duration) {
  var calendar = new Array(1141).fill(0);  //contains a shared 'calendar' from 00:00 - 19:01
  for (x = 0; x < schedules.length; x++){
    for (y = 0; y < schedules[x].length; y++){
      calendar = reserveSlot(calendar, schedules[x][y]);  //add that meeting to calendar 
    }
  }
  var minCounter = 1;
  for (i = 541; i < calendar.length; i++){
    if (minCounter == duration){ //found space!
      if ((duration == 1 && calendar[i] == 0) || duration > 1){
         return minutesToString(i - minCounter);
      }
    }
    minCounter = calendar[i] == 0 ? minCounter+1 : 1;
  }
  return null;
}

function reserveSlot(calendar, meeting){
  var meetingStart = stringToMinutes(meeting[0]); 
  var meetingEnd = stringToMinutes(meeting[1]);
  for (i = meetingStart; i <= meetingEnd; i++){
    calendar[i] = 1;  //booked out
  }
  return calendar;
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