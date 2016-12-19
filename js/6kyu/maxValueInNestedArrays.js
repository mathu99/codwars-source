function findNestedMaximum(arr) {
  var max = -100000000000;
  var flattened = arr.reduce(function(a, b) { 
    return a.concat(b);
  }, []);
  var flattened = flattened.reduce(function(a, b) { 
    return a.concat(b);
  }, []);
  var flattened = flattened.reduce(function(a, b) { 
    return a.concat(b);
  }, []);
  var flattened = flattened.reduce(function(a, b) { 
    return a.concat(b);
  }, []);
  for (x = 0; x < flattened.length; x++){
      max = flattened[x] > max ? flattened[x] : max;
  }
  return max;
}