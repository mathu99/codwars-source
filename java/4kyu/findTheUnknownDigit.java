import javax.script.ScriptEngineManager;
import javax.script.ScriptEngine;
import javax.script.ScriptException;

public class Runes {

	public static int solveExpression( final String expression ) {
        String lhs = expression.split("=")[0], rhs = expression.split("=")[1];
        String split = lhs.contains("+") ? "+" : lhs.contains("-") ? "-" : lhs.contains("*") ? "*" : "";
        ScriptEngineManager mgr = new ScriptEngineManager();
        ScriptEngine engine = mgr.getEngineByName("JavaScript");
        for (int i = 0; i < 10; i++) {
            if (!lhs.contains(""+i)){
              lhs = lhs.replaceAll("--", "+");
              String foo = lhs.replaceAll("[?]", ""+i);
              try {
                  if (engine.eval(foo).toString().equalsIgnoreCase(rhs.replaceAll("[?]", ""+i))){
                      return i;
                  }
              } catch (ScriptException ex) { }
            }
        }
	    return -1;
	}
}