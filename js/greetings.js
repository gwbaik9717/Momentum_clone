const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');


const focusAnswer = document.querySelector('#answer')
const mainFocus = document.querySelector('.focus--main');
const mainFocusInput = document.querySelector('.focus--main input');
const todayFocus = document.querySelector('.focus--today');
const todayFocusList = document.querySelector('.focus--today span');

const USERNAME_KEY = 'username';

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add('hidden');
    const username = loginInput.value;
    paintGreetings(username);
    localStorage.setItem('username', username); 
    paintClock();
    paintMainFocus();
}

function onMainFocusSubmit(event){
    event.preventDefault();
    todayFocusList.innerHTML = mainFocusInput.value;
    mainFocus.classList.add('hidden');
    todayFocus.classList.remove('hidden');
}

function paintGreetings(username){
    //greeting.classList.remove('hidden');
    greeting.innerHTML = `Hello! ${username}`;
}

function paintClock(){
    clock.classList.remove('hidden');
}

function paintMainFocus(){
    mainFocus.classList.remove('hidden');
}



const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove('hidden');
    loginForm.addEventListener('submit', onLoginSubmit);
}else{
    paintGreetings(savedUsername);
    paintClock();
    paintMainFocus();
}

focusAnswer.addEventListener('submit', onMainFocusSubmit);