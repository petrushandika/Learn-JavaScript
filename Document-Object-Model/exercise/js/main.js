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

