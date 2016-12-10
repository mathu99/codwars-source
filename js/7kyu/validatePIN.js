function validatePIN (pin) {
  return (pin.length == 4 || pin.length == 6) && !isNaN(pin) && (""+pin).indexOf('.') == -1;
}