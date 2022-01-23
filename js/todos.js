const todoBtn = document.querySelector('.todo');
const popup = document.querySelector('#pop-up');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');
const popupContent = document.querySelector('#pop-up__content');
let todoListArray = [];

function openPopup(){
    popup.classList.toggle('hidden');
}

function paintDefault(){
    popupContent.classList.remove('hidden');
}

function eraseDefault(){
    popupContent.classList.add('hidden');
}

function paintToDos(text, id){
    
    const li = document.createElement('li');
    //const btn = document.createElement('button');
    const btn = document.createElement('input');
    const span = document.createElement('span');
    btn.type = 'checkbox';
    span.innerText = text;
    li.id = id;
    btn.addEventListener('click', deleteTodos);
    li.appendChild(btn);
    li.appendChild(span);
    todoList.appendChild(li);
    todoInput.value = "";
}

function deleteTodos(event){
    const li = event.target.parentElement;
    li.remove();
    todoListArray = todoListArray.filter(element => element.id !== Number(li.id));
    saveToDos();
    console.log(savedToDos);
    if(todoListArray.length === 0){
        paintDefault();
    }
}

function handleToDoSubmit(event){
    event.preventDefault();
    const todo = {
        text: todoInput.value,
        id: Date.now()
    };

    todoListArray.push(todo);
    eraseDefault();
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
        eraseDefault();
    });
}else{
    paintDefault();
}

todoBtn.addEventListener('click', openPopup);
todoForm.addEventListener('submit', handleToDoSubmit);