function getMixedNum(fraction) {
  var nums = fraction.split("/");
  return (""+(nums[0]/nums[1])).split(".")[0] + " " + nums[0]%nums[1]+"/"+nums[1];
}