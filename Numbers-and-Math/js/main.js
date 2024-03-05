/*
At, restaurant, you order 1 soup for $10, 3 burgers for $8 each, and 1 ice cream for $5. After you got the result add calculate with 2 friends (3 people in total) an make same order before
*/
function restaurant() {
    let soup = 10;
    let burger = 8;
    let iceCream = 5;
    let person = 3;
    let total = (soup + (burger * 3) + iceCream) * person;
    console.log(`Total Cost is $${total}`);
}

restaurant();

/*
Calculate the total cost of a toaster ($18.50) and 2 shirts ($7.50 each). And calculate a 10% & 20% tax for the total
*/
function totalCost() {
    let toaster = 1850;
    let shirt = 750;
    let taxTenPercent = 10/100;
    let taxTwentyPercent = 20/100;
    let subtotal = (toaster + (shirt * 2)) / 100;
    let totalWithTenPercent = subtotal + (subtotal * taxTenPercent);
    let totalWithTwentyPercent = subtotal + (subtotal * taxTwentyPercent);
    console.log(`Total Cost With 10% Tax: $${totalWithTenPercent}`);
    console.log(`Total Cost With 20% Tax: $${totalWithTwentyPercent}`);
}

totalCost();

/*
In the Amazon project, got ot the home page and add a toaster ($18.99) to your cart so you have 1 basketball, 1 t-shirt, and 1 toaster. Choose $4.99 shipping for the toaster.
- Calculate the cost of the products (before shipping and taxes).
- Calculate the total before tax.
- Calcuulate the 10% tax exactly. Use Math.round().
- Calculate order total at the bottom. After that remove the toaster from your cart.
*/
function amazon() {
    let toaster = 1899;
    let basketball = 1447;
    let tshirt = 1447;
    let shipping = 499;
    let totalBeforeShipping = (toaster + basketball + tshirt) / 100;
    console.log(`Items(3): $${totalBeforeShipping}`);
    console.log(`Shipping & handling: $${shipping / 100}`);

    let totalBeforeTax = (totalBeforeShipping + (shipping / 100));
    console.log(`Total before tax: $${totalBeforeTax}`);

    let taxTenPercent = 10 / 100;
    let totalWithTax = totalBeforeTax * taxTenPercent;
    let roundedTotalWithTax = Math.round(totalWithTax * 100) / 100;
    console.log(`Estimated tax (10%): $${roundedTotalWithTax}`);

    let total = totalBeforeTax + roundedTotalWithTax;
    console.log(`Orderl total: $${total}`);
    
    let freeShipping = total - (shipping / 100);
    console.log(`Order total with free shipping: $${freeShipping}`);
}

amazon();

/*
Let's say we want to always round a number down (2.8 => 2)
*/
function numberDown() {
    let countNumber = 28;
    console.log(Math.floor(countNumber / 10));
}

numberDown();

/*
Lets always round a number up (2.2 => 3)
*/
function numberUp() {
    let countNumber = 22;
    console.log(Math.ceil(countNumber / 10));
}

numberUp();

/*
We'll use JavaScript to convert temperatures from Celcius (C) to Fahrenheit (F). The formula is:
- Fahrenheit = (Celcius * 9 / 5) + 32
- Calcius = (Fahrenheit - 32) * 5 /9
- The temperature is 25C. Calculate the temperature in Fahrenheit
- The temperature is 86F. Calculate the temperature in Celcius
- The temperature is -5C. Calculate the temperature in Fahrenheit
*/

function celciusToFahrenheit(celcius) {
    return (celcius * 9 / 5) + 32;
}

let celciusValue = prompt('Enter temperature in Celcius: ');
let fahrenheitValue = celciusToFahrenheit(parseInt(celciusValue));
console.log(`Temperature ${celciusValue}C is ${fahrenheitValue}F`);

function fahrenheitToCelcius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

let fahrenheitInCelcius = prompt('Enter temperature in Fahrenheit: ');
let celciusInFahrenheit = fahrenheitToCelcius(parseInt(fahrenheitInCelcius));
console.log(`Temperature ${fahrenheitInCelcius}F is ${celciusInFahrenheit}C`);
