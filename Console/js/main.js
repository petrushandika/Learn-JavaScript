document.addEventListener('DOMContentLoaded', () => {
    const addCart = document.querySelector('.add');
    addCart.addEventListener('click', () => {
        add();
    });

    const buyNow = document.querySelector('.buy');
    buyNow.addEventListener('click', () => {
        buy();
    });
});

function add() {
    alert('Add to cart!');
};

function buy() {
    alert('Loading...');
};