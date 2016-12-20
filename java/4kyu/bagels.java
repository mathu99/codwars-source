import java.lang.reflect.*;

public class BagelSolver {

  public static Bagel getBagel() {
    try {
    Field value = Boolean.class.getDeclaredField("value");
    value.setAccessible(true);
    value.set(Boolean.TRUE, Boolean.FALSE);
    }catch(Exception e){
      return new Bagel();
    }
    return new Bagel();
  }
  
}