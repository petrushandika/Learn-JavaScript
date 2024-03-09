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
        todoListText += text;
    }

    console.log(todoListText);
    document.querySelector('.result-todo').innerHTML = addText;
}

function addTodoSomething() {
    const addSomething = document.querySelector('.todo-two');
    const something = addSomething.value;
    
    todoList.push(something);
    console.log(todoList);

    addSomething.value = '';
}

