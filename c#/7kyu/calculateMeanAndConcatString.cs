using System;
public class Kata
{
  public static object[] Mean(char[] lst)
  {
    object[] obj = new object[2];
    double total = 0;
    int count = 0;
    String word = "";
    String alpha = "abcdefghijklmnopqrstuvwxyz";
    for (int i = 0; i < lst.Length; i++){
      if (alpha.IndexOf(lst[i]) == -1){
        total += (int)Char.GetNumericValue(lst[i]);
        ++count;
      }else{
        word += lst[i];
      }
    }
    obj[0] = total/count;
    obj[1] = word;
    return obj;
  }
}