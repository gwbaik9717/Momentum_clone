const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const USERNAME_KEY = 'username';

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add('hidden');
    const username = loginInput.value;
    paintGreetings(username);
    localStorage.setItem('username', username) 
}

function paintGreetings(username){
    greeting.classList.remove('hidden');
    greeting.innerHTML = `Hello! ${username}`;
}



const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove('hidden');
    loginForm.addEventListener('submit', onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}