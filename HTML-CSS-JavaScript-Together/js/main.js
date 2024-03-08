/* Add button with another method, use classList.contains('class-name') and use DOM */
document.addEventListener('DOMContentLoaded', () => {
    const testButton = document.querySelector('.js-button');
    console.log(testButton.classList.contains('js-button'));
})

/* Create more button,when clicking the button add or remove the class 'is-toggled, and use any styling and use if(classList.contains('is-toggled')) to decided wheter to add or remove the class name'  */
document.addEventListener('DOMContentLoaded', () => {
    const onButton = document.querySelector('.is-toggled');
    onButton.addEventListener('click', () => {
        if (onButton.innerText === 'ON') {
            onButton.innerHTML = 'OFF';
            onButton.classList.add('off-button');
        } else {
            onButton.innerHTML = 'ON';
            onButton.classList.remove('off-button');
        }
        
        if (!onButton.classList.contains('off-button')) {
            console.log(onButton.classList.contains('off-button'));
        } else if (onButton.classList.contains('off-button')) {
            console.log(onButton.classList.contains('off-button'));
        }
    })
})

/*
Copy task before on DOM, if we type a number less than 0, display a red error message
*/
function costKeydown(event) {
    if(event.key === 'Enter') {
        calculate();
    }
}

function calculate() {
    const inputOrder = document.querySelector('.input-order');

    let costOrder = Number(inputOrder.value);

    if (costOrder < 0) {
        const errorOuput = document.querySelector('.total-cost')
        errorOuput.classList.add('error-ouput')
        document.querySelector('.total-cost').innerHTML = 'Error: cost cannot be less than $0';
        return;
    }

    document.querySelector('.total-cost').innerHTML = `$${costOrder}`
}

/* Exercise to make calculator */
let calculation = '';

function ac() {
    calculation = '';
    updateDisplay();
}

function plusMinus() {
    if (calculation !== '' && calculation[0] !== '-') {
        calculation = '-' + calculation;
    } else if (calculation !== '' && calculation[0] === '-') {
        calculation = calculation.slice(1);
    }

    updateDisplay();
}

function percent() {
    calculation = (parseFloat(calculation) / 100).toString();
    updateDisplay();
}

function devide() {
    appendOperator(' / ');
}

function times() {
    appendOperator(' * ');
}

function minus() {
    appendOperator(' - ');
}

function plus() {
    appendOperator(' + ');
}

function seven() {
    appendNumber('7');
}

function eight() {
    appendNumber('8');
}

function nine() {
    appendNumber('9');
}

function four() {
    appendNumber('4');
}

function five() {
    appendNumber('5');
}

function six() {
    appendNumber('6');
}

function one() {
    appendNumber('1');
}

function two() {
    appendNumber('2');
}

function three() {
    appendNumber('3');
}

function zero() {
    appendNumber('0');
}

function comma() {
    if (calculation === '' || isNaN(calculation[calculation.length - 1])) {
        calculation += '0.';
    } else if (!calculation.includes('.')) {
        calculation += '.';
    }

    updateDisplay();
}

function equal() {
    try {
        calculation = eval(calculation).toString();
        updateDisplay();
    } catch (error) {
        calculation = 'Error';
        updateDisplay();
    }
}

function appendNumber(number) {
    calculation += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (isOperator(calculation[calculation.length - 1])) {
        calculation = calculation.slice(0, -1) + operator;
    } else {
        calculation += operator;
    }

    updateDisplay();
}

function updateDisplay() {
    console.log(calculation);
}

function isOperator(char) {
    return char === ' / ' || char === ' * ' || char === ' - ' || char === ' + ';
}

// function calculator() {
//     const calculate = document.querySelector('.calculatorResult');
//     calculate.innerHTML = `${calculation} = ${equal()}`;
// }
// to do : must adding result on paragraph