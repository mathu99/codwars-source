function findTheNotFittingElement(series)
{
  var series1 = [],
      series2 = [];

  for (i = 0; i < series.length; i++){  //checks based on type
    if (i === 0){
      series1.push(series[i]);
    }else{
      if (typeof(series[i]) != typeof(series1[0]))
        series2.push(series[i]);
      else
        series1.push(series[i]);
    }
  }
  if (series1.length == 1) return series1[0];
  else if (series2.length == 1) return series2[0];
  else{
    series1 = [];
    series2 = [];
  }
      
  for (i = 0; i < series.length; i++){  //check based on negative / positive  
      if (!isNaN(series[i]) && series[i] > 0)
        series1.push(series[i]);
      else
        series2.push(series[i]);
  }
  if (series1.length == 1) return series1[0];
  else if (series2.length == 1) return series2[0];
  else{
    series1 = [];
    series2 = [];
  }
  
  for (i = 0; i < series.length; i++){  //check based on odd 
      if (!isNaN(series[i]) && series[i] % 2 == 0)  //even
        series1.push(series[i]);
      else if (!isNaN(series[i]))  //odd
        series2.push(series[i]);
  }
  if (series1.length == 1) return series1[0];
  else if (series2.length == 1) return series2[0];
  else{
    series1 = [];
    series2 = [];
  }
  
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  for (i = 0; i < series.length; i++){  //check based on equalitiy  
      if (isNaN(series[i]) && alpha.indexOf(series[i].toLowerCase()) != -1)
        series2.push(series[i]);
      else if (isNaN(series[i]))
        series1.push(series[i]);
  }
  if (series1.length == 1) return series1[0];
  else if (series2.length == 1) return series2[0];
  else{
    series1 = [];
    series2 = [];
  }
  
  for (i = 0; i < series.length; i++){  //checks based on type
      if (isNaN(series[i]) && series[i] == series[i].toLowerCase())
        series2.push(series[i]);
      else if (isNaN(series[i]) && series[i] == series[i].toUpperCase())
        series1.push(series[i]);
  }
  if (series1.length == 1) return series1[0];
  else if (series2.length == 1) return series2[0];
  else{
    series1 = [];
    series2 = [];
  }
  
  for (i = 0; i < series.length; i++){  //check based on equalitiy  
    if (i === 0){
      series1.push(series[i]);
    }else{
      if (series[i] != series1[0])
        series2.push(series[i]);
      else
        series1.push(series[i]);
    }
  }
  if (series1.length == 1) return series1[0];
  else if (series2.length == 1) return series2[0];
  else{
    series1 = [];
    series2 = [];
  }
}