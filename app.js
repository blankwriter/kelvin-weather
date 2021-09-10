//initializing the value of kelvin in degree
const kelvin = 293; 
//coverting Kelvin to Celsius and initializing it.
let celsius;
celsius = kelvin - 273;
//converting celsius to fahrenheit and also initizalizing it.
let fahrenheit;
fahrenheit = celsius *(9/5)+32;
//rounding down the figures
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
//converting Celsius to Newton
let newton;
newton = celsius*(33/100);
//rounding down the figures
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton`);

