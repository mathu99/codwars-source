function digitize(n) {
  return (""+n).split("").reverse().map(function(num) {
    return parseInt(num, 10);
  });
}