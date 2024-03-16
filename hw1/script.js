let celsius = 30;
let fahrenheit = 183;

let parseForFahrenheit = parseFloat((celsius + 32) / 1.8)
console.log(parseForFahrenheit.toFixed(2));
let parseForCelsius = parseFloat((fahrenheit - 32) * 5 / 9);
console.log(parseForCelsius.toFixed(2));

const name = 'Ilmir';
const admin = name;
console.log(admin);
