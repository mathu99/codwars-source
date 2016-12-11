function isPrime(num) {
  if (num < 2) return false;
  for (i = 2; i < 10000000; i++){  //random high number
    if (num % i == 0 && num != i)
      return false;
  }
  return true;
}