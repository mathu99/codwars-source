function solution(roman){
  var keys = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000},
  sum = keys[roman[0]];
  for (i = 1; i < roman.length; i++){
    if (keys[roman[i]] <= keys[roman[i-1]])
      sum += keys[roman[i]];
    else
      return 4;
  }
  return sum;
}