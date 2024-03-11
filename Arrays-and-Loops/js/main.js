// Exercise 1
const todo = [];

function addTodo() {
    const inputTodo = document.querySelector('.todo-one');
    const name = inputTodo.value;

    todo.push(name);
    console.log(todo);

    inputTodo.value = '';
}

// Exercise 2
const todoList = [];


function renderSomething() {
    let addText = '';

    for (let i = 0; i < todoList.length; i ++) {
        const todo = todoList[i];
        const text = `<p>${todo}</p>`;
        addText += text;
    }

    console.log(addText);
    document.querySelector('.result-todo').innerHTML = addText;
}

function addTodoSomething() {
    const addSomething = document.querySelector('.todo-two');
    const something = addSomething.value;
    
    todoList.push(something);
    console.log(todoList);

    addSomething.value = '';
    renderSomething();
}

document.addEventListener('DOMContentLoaded', () => {
    renderSomething();
})

// Practice 3
const todoAny = [{
    anything: '',
    dueDate: ''
}];

function renderAnything() {
    let addAny = '';

    for (let i = 0; i < todoAny.length; i ++) {
        const anyTodoObject = todoAny[i];
        // const name = anyTodoObject.name;
        // const dueDate = anyTodoObject.dueDate;
        const { anything, dueDate } = anyTodoObject;
        const textAny = `
        <div>${anything}</div>
        <div>${dueDate}</div>
        <button onclick="deleteTodo(${i}, 1)">Delete</button>`;
        addAny += textAny;
     }

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






