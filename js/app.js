const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add('hidden');
    const username = loginInput.value;
    paintGreetings(username);
    
}

function paintGreetings(username){
    greeting.classList.remove('hidden');
    greeting.innerHTML = `Hello! ${username}`;
}

loginForm.addEventListener('submit', onLoginSubmit);
