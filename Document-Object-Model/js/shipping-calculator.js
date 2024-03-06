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
    let costOrder = Number(inputOrder.value);

    if (costOrder < 40) {
        costOrder += 10;
        console.log(costOrder);
    }

    document.querySelector('.total-cost').innerHTML = `$${costOrder}`
}
