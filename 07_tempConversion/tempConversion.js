const convertToCelsius = function(fahrenheit) {
  //(°F − 32) × 5/9 = °C
  celsius = (fahrenheit - 32) * 5 / 9;
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  //(°C × 9/5) + 32 = °F
  fahrenheit = (celsius * 9 / 5) + 32
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};
convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
