function chirp(n, str) {
  return n != 0 ? chirp(n-1, str+"-chirp") : str.replace("undefined-","");
};