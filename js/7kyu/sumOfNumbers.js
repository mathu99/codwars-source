function GetSum( a,b ) {
    if (a == b){
      return a;  
    }
    var sum = 0;
    var high = a > b ? a : b;
    var low = a < b ? a : b;
    var counter = low;
    while (counter <= high){
      sum += counter;
      counter++;
    }
    return sum;
}