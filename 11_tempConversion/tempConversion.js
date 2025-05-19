const convertToCelsius = function(fahrenheit) {
  return roundDecimal((fahrenheit - 32) * 5 / 9);
  
};

const convertToFahrenheit = function(celcius) {
  return roundDecimal(celcius * 9 / 5 + 32);
  
};

function roundDecimal(number) {
  return Math.round(number * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
