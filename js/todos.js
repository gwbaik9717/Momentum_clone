const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');
let todoListArray = [];

function paintToDos(text, id){
    const li = document.createElement('li');
    const btn = document.createElement('button');
    li.innerText = text;
    li.id = id;
    btn.innerText = '❌';
    btn.addEventListener('click', deleteTodos);
    li.appendChild(btn);
    todoList.appendChild(li);
    todoInput.value = "";
}

function deleteTodos(event){
    const li = event.target.parentElement;
    li.remove();
    todoListArray = todoListArray.filter(element => element.id !== Number(li.id));
    saveToDos();
}

function handleToDoSubmit(event){
    event.preventDefault();
    const todo = {
        text: todoInput.value,
        id: Date.now()
    };

    todoListArray.push(todo);

    saveToDos();
    paintToDos(todoInput.value, todo.id);

}

function saveToDos(){
    localStorage.setItem('todos', JSON.stringify(todoListArray));
}


const savedToDos = JSON.parse(localStorage.getItem('todos'));

// local storage 로드
if(savedToDos !== null){
    savedToDos.forEach(element => {
        paintToDos(element.text, element.id);
        todoListArray.push(element);
    });

}

todoForm.addEventListener('submit', handleToDoSubmit);