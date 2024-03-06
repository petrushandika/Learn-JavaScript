/*
Subscribe Button
*/
document.addEventListener('DOMContentLoaded', () => {
    const buttonElement = document.querySelector('.subs-button');

    buttonElement.addEventListener('click', () => {
        if (buttonElement.innerText === 'Subscribe') {
            buttonElement.innerHTML = 'Subscribed'
        } else {
            buttonElement.innerHTML = 'Subscribe'
        }
    })
})
