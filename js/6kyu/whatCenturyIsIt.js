function whatCentury(year)
{
  return year == "2000" ? "20th" : readable(+(year.substr(0,2))+1);
}

function readable(year){
  switch((""+year)){
    case "21" : { return year+"st"; } 
    case "22" : { return year+"nd"; } 
    case "23" : { return year+"rd"; } 
    default : { return year+"th"; }
  }
}