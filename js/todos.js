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
    const toDeleteID = event.path[1].id;
    const toDeleteEl = document.getElementById(String(toDeleteID)); // 삭제될 요소 선택
    toDeleteEl.remove();


    todoListArray = todoListArray.filter(element => element.id !== Number(toDeleteID));
    saveToDos(todoListArray);

}

function handleToDoSubmit(event){
    event.preventDefault();
    const todo = {
        text: todoInput.value,
        id: Date.now()
    };

    todoListArray.push(todo);

    saveToDos(todoListArray);
    paintToDos(todoInput.value, todo.id);

}

function saveToDos(array){
    localStorage.setItem('todos', JSON.stringify(array));
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