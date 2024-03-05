/*
Create the text 'My name is: ' as a string
*/
console.log("'My name is:'");

/*
Create your name as a string
*/
console.log("'Petrus'");

/*
Using concatenation, add the 2 strings from task before to create 'My name is: __' (replace __ with your name)
*/
let stringOne = 'My name is ';
let stringTwo = 'Petrus';
let fullString = stringOne + stringTwo;
console.log(fullString);

/*
At a restaurant, you order 1 coffee ($5) and 1 bagel ($3). Using math, calculate the total cost, and using concatenation and interpolation, create the text: 'Total cost: $__' (replace __ with the total you calculated) and using popup using alert().
*/
function restaurant() {
    let coffee = 5;
    let bagel = 3;
    let total = coffee + bagel;
    console.log('Total cost: $' + total); //Concatenation
    console.log(`Total cost: $${total}`); //Interpolation
    alert(`Total cost: $${total}`); //Alert
}

restaurant();

/*
You order 1 coffee (%5.99) and 1 begel ($2.95). Using math, calculate the total cost, and using concatenation and interpolation, create the text: 'Total cost: $__' and using popup
*/
function order() {
    let coffee = 599;
    let bagel = 295;
    let total = (coffee + bagel) / 100;
    console.log('Total cost: $' + total);
    console.log(`Total cost: $${total}`);
    alert(`Total cost: $${total}\nThank you, come again!`)
}

order();

/*
In the Amazon project, update the cart 2 basketball ($20.95 each) with $4.99 shipping, and 2 t-shirts ($7.99 each) with $4.99 shipping
*/
function amazon() {
    let basketball = 2095;
    let tshirt = 799;
    let shipping = Math.round(499);
    let item = (basketball * 2 + tshirt * 2) /100;
    let totalBeforeTax = item + (shipping * 2) / 100;
    let tax = totalBeforeTax * 10 / 100;
    let freeShipping = (basketball + tshirt) / 100;
    console.log('Items(' + (2 + 2) + '): $' + item);
    console.log('Shipping & handling: $' + (shipping * 2) / 100);
    console.log('Total before tax: $' + totalBeforeTax);
    console.log('Estimated tax (10%): $' + tax.toFixed(2));
    console.log('Items(' + (1 + 1) + '): $' + freeShipping);
}

amazon();

