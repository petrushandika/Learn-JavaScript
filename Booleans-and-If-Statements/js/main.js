function clock() {
    const now = new Date();

    const hour = now.getHours();

    const name = 'Petrus';

    if (hour >= 6 && hour <= 12 ) {
        console.log(`Good Morning ${name}!`);
    } else if (hour >= 13 && hour <= 17) {
        console.log(`Good Afternoon ${name}!`);
    } else if (hour >= 18 && hour <= 23) {
        console.log(`Good Night ${name}!`);
    };
};

clock();

function order() {
    const age = Math.floor(Math.random() * 100) + 1;

    const isHoliday = true;

    if ((age <= 6 || age >= 65) && isHoliday) {
        console.log('Discount!');
    } else {
        console.log('No Discount!');
    };
};

order();

function coin(userCoin) {
    let number = Math.random();
    let guess = number < 0.5 ? 'heads' : 'tails';

    console.log(guess);

    let computerCoin = pickedComputerCoin();
    let result = '';

    if (guess === 'heads') {
        if (computerCoin === 'heads') {
            result = 'Draw!';
        } else {
            result = 'You Win!';
        }
    } else if (guess === 'tails') {
        if (computerCoin === 'heads') {
            result = 'You Lose!';
        } else {
            result = 'Draw!';
        }
    }

    console.log(`You Picked ${guess}, Computer Picked ${computerCoin}, ${result}`);
    return result;
}

function pickedComputerCoin() {
    const coins = ['heads', 'tails'];
    const randomIndex = Math.floor(Math.random() * coins.length);
    return coins[randomIndex];
}

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
    };
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
