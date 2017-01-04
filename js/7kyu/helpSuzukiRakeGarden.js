function rakeGarden(garden) {
  return garden.split(" ").map(function(a){ return (a != "gravel" && a != "rock") ? "gravel" : a }).join(" ");
}