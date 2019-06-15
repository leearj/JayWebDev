
// This will convertKelvin to Celsius, then to Farenheit.

const kelvin = 293; // Today's temperature in kelvin.
const celcius = kelvin - 273; // celcius is 273 less than kelvin.
const farenheit = Math.floor(celcius * (9/5) + 32); // farenheit formula, and round down.

console.log(`The temperature today is ${farenheit} degress Farenheit.`);
