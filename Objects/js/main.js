const product = {
    basketball: 2095,
    'delivery-time': 3,
    comparePrice: function(product1, product2) {
        console.log('This is functions: ', product1 + ' and ' + product2)
    }
}

product['delivery-time'] = '3 Days';

console.log(product.basketball);
console.log(product['delivery-time']);
product.comparePrice('item', 'time');

function isSameProduct(item1, item2) {
    return (
        item1.name === item2.name && item1.price === item2.price
    );
}

const item3 = {
    name: 'basketball',
    price: 2095
}

const item4 = {
    name: 'baseball',
    price: 799
}

const item5 = {
    name: 'socks',
    price: 1025
}

console.log(isSameProduct('socks', 'socks'));

const lowerCase = 'Good Morning';
console.log(lowerCase.toLowerCase());

const doubletext = 'test';
console.log(doubletext.repeat(2));

/*
Calculation
*/

let calculation = '';

function updateCalculation(value) {
    calculation += value;
    console.log(calculation);
}

function calculate() {
    if (calculation !== '') {
        try {
            const result = eval(calculation);
            console.log(result);
        } catch {
            console.error('Error', error);
        }
    }
}

function heads() {
    const flip = Math.random();

    let guess = '';
    if (flip < 0.5) {
        guess = 'heads';
    } else {
        guess = 'tails';
    }

    let result = '';
    if (guess === 'heads') {
        result = 'Tie!';
    } else {
        result = 'You Win!';
    }
    
    alert(`You picked heads, Computer picked ${guess}. ${result}`);
}

function tails() {
    const flip = Math.random();

    let guess = '';

    if (flip < 0.5) {
        guess = 'heads';
    } else {
        guess = 'tails';
    }

    let result = '';
    if (guess === 'heads') {
        result = 'You Win!';
    } else {
        result = 'Tie!';
    }

    alert(`You picked tails, Computer picked ${guess}. ${result}`);
}
