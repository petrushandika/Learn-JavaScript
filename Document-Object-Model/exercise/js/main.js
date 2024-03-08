/*
Create 2 Botton, when click button one show inner html content and button two display "Done" on the console
*/
document.addEventListener('DOMContentLoaded', () => {
    console.log(document.querySelector('button'))
    
    const done = document.querySelector('.two');
    done.addEventListener('click', () => {
        console.log('Done');
    })
})

/*
Create 2 Buttons 'heads' and 'tails' and display 'You choose: heads' or 'You choose: tails' in paragraph
*/
document.addEventListener('DOMContentLoaded', () => {
    const heads = document.querySelector('.heads');
    heads.addEventListener('click', () => {
        result('Heads');
    });

    const tails = document.querySelector('.tails');
    tails.addEventListener('click', () => {
        result('Tails');
    });
});

function result(choice) {
    const resultPoint = document.querySelector('.result');
    resultPoint.innerHTML = `You Choose ${choice}!`;
}

/*
Create text box and submit button. When clicking submit, display `Your name is ${name}`
*/
function submit() {
    const inputName = document.querySelector('.inputName');
    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = `Your name is: ${inputName.value}`;
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        submit();
    }
}

/*
Shipping Amazon
*/
function costKeydown(event) {
    if(event.key === 'Enter') {
        calculate();
    }
}

function calculate() {
    const inputOrder = document.querySelector('.input-order');
    let costOrder = Number(inputOrder.value) * 100;

    if (costOrder < 4000) {
        costOrder += 1000;
        console.log(costOrder);
    }

    document.querySelector('.total-cost').innerHTML = `$${costOrder/100}`
}

/*
Create input and called onkeyup="". After we press a key and release it
*/
function inputKey(event) {
    const inputKeyUp = document.querySelector('.input');
    const valueInput = inputKeyUp.value;
    document.querySelector('.resultInput').innerHTML = valueInput;
}

/*
Copy exercise before and create paragraph to display the quantity
*/
let cartQuantity = 0;

function add() {
    console.log('Item added to cart!');
}

function buy() {
    console.log('Loading...');
}

function updateQuantity(amount) {
    if (cartQuantity + amount > 10) {
        console.log('The cart is full');
    } else if (cartQuantity + amount < 0) {
        console.log('Not enough items in the cart');
    } else {
        cartQuantity += amount;
        console.log(cartQuantity);
    }

    showAdd();
    displayCart();
};

function plusFour() {
    updateQuantity(4);
}

function plusFive() {
    updateQuantity(5);
}

function remove() {
    updateQuantity(-1);
}

function minusTwo() {
    updateQuantity(-2);
}

function minusThree() {
    updateQuantity(-3);
}

function showAdd() {
    const addQuantity = document.querySelector('.addQuantity');
    addQuantity.innerHTML = `You add item: ${cartQuantity}`
}

function displayCart() {
    const displayCartQuantity = document.querySelector('.cartDisplay');
    displayCartQuantity.innerHTML = `Cart quantity: ${cartQuantity}`;
}

/*
Copy exercise before and show the result with paragraph
*/
let calculation = '';

function updateCalculation(value) {
    calculation += value;
    console.log(calculation);
    calculator();
}

function one() {
    updateCalculation('1');
}

function two() {
    updateCalculation('2');
}

function three() {
    updateCalculation('3');
}

function plus() {
    updateCalculation(' + ');
}

function four() {
    updateCalculation('4');
}

function five() {
    updateCalculation('5');
}

function six() {
    updateCalculation('6');
}

function minus() {
    updateCalculation(' - ');
}

function seven() {
    updateCalculation('7');
}

function eight() {
    updateCalculation('8');
}

function nine() {
    updateCalculation('9');
}

function equal() {
    try {
        return eval(calculation);
    } catch (error) {
        console.error(`${error}`);
        return '';
    }
}

function calculator() {
    const calculate = document.querySelector('.calculatorResult');
    calculate.innerHTML = `${calculation} = ${equal()}`;
}
