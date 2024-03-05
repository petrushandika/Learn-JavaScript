function greet() {
    let name = '';
    if (!name) {
        console.log('Hi There!');
    } else {
        console.log(`Hi ${name}!`);
    };
};

greet();

function convertToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

const inputCelsius = 25;
const celsiusValue = parseFloat(inputCelsius);

if (!isNaN(celsiusValue)) {
    const resultFahrenheit = convertToFahrenheit(celsiusValue);
    console.log(`${celsiusValue}°C = ${resultFahrenheit}°F`);
} else {
    console.log('Invalid Input!');
}

function convertToCelcius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

const inputFahrenheit = 86;
const fahrenheitValue = parseFloat(inputFahrenheit);

if(!isNaN(fahrenheitValue)) {
    const resultCelcius = convertToCelcius(fahrenheitValue).toFixed(2);
    console.log(`${fahrenheitValue}°F = ${resultCelcius}°C`);
} else {
    console.log('Invalid Input!');
};

function convertTemperature(degrees, unit) {
    if(unit === 'C') {
        const fahrenheit = (degrees * 9 / 5) + 32;
        return `${degrees}C = ${fahrenheit}F`;
    } else if (unit === 'F') {
        const celsius = (degrees - 32) * 5 / 9;
        return `${degrees}F = ${celsius}C`;
    } else {
        return 'Invalid Input!';
    };
};

console.log(convertTemperature(25, 'C'));
console.log(convertTemperature(98, 'F'));

let calculation = '';

function updateCalculation(value) {
    calculation += value;
    console.log(calculation);
};

function one() {
    updateCalculation('1');
};

function two() {
    updateCalculation('2');
};

function three() {
    updateCalculation('3');
};

function plus() {
    updateCalculation(' + ');
};

function four() {
    updateCalculation('4');
}

function five() {
    updateCalculation('5');
};

function six() {
    updateCalculation('6');
};

function minus() {
    updateCalculation(' - ');
};

function seven() {
    updateCalculation('7');
};

function eight() {
    updateCalculation('8');
}

function nine() {
    updateCalculation('9');
};

function equal() {
    calculation = eval(calculation);
    console.log(calculation);
};
