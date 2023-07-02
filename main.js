const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault();

    const taskText = todoInput.value;

    const newTask = document.createElement('li');
    newTask.innerText = taskText;

    deleteBtn.addEventListener('click', deleteTask)

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.classList.add('fas', 'fa-delete-left');
    deleteBtn.style['margin-left'] = '15px';
    newTask.append(deleteBtn);

    todoList.append(newTask);

    todoInput.value = '';

    todoInput.focus();
}

function deleteTask() {
    
}