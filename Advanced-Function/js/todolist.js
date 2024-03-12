const todoAny = [{
    anything: '',
    dueDate: ''
}];

function renderAnything() {
    let addAny = '';
    
    todoAny.forEach((anyTodoObject, i) => {
        const { anything, dueDate } = anyTodoObject;
        const textAny = `
        <div>${anything}</div>
        <div>${dueDate}</div>
        <button onclick="deleteTodo(${i}, 1)">Delete</button>`;
        addAny += textAny;
    });

    document.querySelector('.result-any').innerHTML = addAny;
}

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('.add-btn');
    addButton.addEventListener('click', () => {
        todoAnything();
    })
})

function todoAnything() {
    const addAnything = document.querySelector('.todo-three');
    const anything = addAnything.value;

    const dateInput = document.querySelector('.todo-date');
    const dueDate = dateInput.value;

    todoAny.push({
        anything,
        dueDate
    });

    addAnything.value = '';
    renderAnything();
}

function deleteTodo(index) {
    todoAny.splice(index, 1);
    renderAnything();
}

document.addEventListener('DOMContentLoaded', () => {
    renderAnything();
})
