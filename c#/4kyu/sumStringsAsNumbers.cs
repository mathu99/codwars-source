using System;
using System.Globalization;
using System.Numerics;

public static class Kata
{
    public static string sumStrings(string a, string b)
    {
      BigInteger a1 = a.Length != 0 ? (BigInteger) BigInteger.Parse(a) : 0;
      BigInteger b1 = b.Length != 0 ? (BigInteger) BigInteger.Parse(b) : 0;
      return ""+ (a1 + b1);
    }
}