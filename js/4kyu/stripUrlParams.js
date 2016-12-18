function stripUrlParams(url, paramsToStrip){
  var returnArr = url.split("?");
  return returnArr.length == 1 ? url : (returnArr[0] + "?" + correctParams(returnArr[1], paramsToStrip));
} 

function correctParams(params, paramsToStrip){
  var eachParam = params.split("&"),
  paramsToStrip = paramsToStrip == null ? "" : paramsToStrip,
  returnStr = "";
  for (i = 0; i < eachParam.length; i++){
      returnStr += (returnStr.indexOf(eachParam[i][0]) != -1 || paramsToStrip.indexOf(eachParam[i][0]) != -1) ? "" : eachParam[i] + "&";
  }
  returnStr = returnStr[returnStr.length-1] == "&" ? returnStr.substr(0,returnStr.length-1) : returnStr;
  return returnStr;
}