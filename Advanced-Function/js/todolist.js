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

function todoAnything() {
    const addAnything = document.querySelector('.todo-three');
    const anything = addAnything.value;

    const dateInput = document.querySelector('.todo-date');
    const dueDate = dateInput.value;

    todoAny.push({
        // anything: name,
        // dueDate: dueDate,
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

// Continue
[
    'Workout',
    'Study',
    'Exercise'
].forEach(function(value, index) {
    if (value === 'Study') {
        return;
    }
    console.log(index);
    console.log(value);
})