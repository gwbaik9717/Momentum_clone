const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

// main-focus 
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
    header.classList.remove('hidden');
    footer.classList.remove('hidden');
}

function onMainFocusSubmit(event){
    event.preventDefault();
    todayFocusList.innerHTML = mainFocusInput.value;
    mainFocus.classList.add('hidden');
    todayFocus.classList.remove('hidden');
    
}

function paintGreetings(username){
    //시간대별 멘트
    const hour = new Date().getHours();
    if(hour>=21){
        greeting.innerHTML = `Good Night, ${username}`;
    }else if(hour<11){
        greeting.innerHTML = `Good Morning ${username}`;
    }else{
        greeting.innerHTML = `Good Afternoon! ${username}`;
    }
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
    header.classList.add('hidden');
    footer.classList.add('hidden');
    
}else{
    paintGreetings(savedUsername);
    paintClock();
    paintMainFocus();
}

focusAnswer.addEventListener('submit', onMainFocusSubmit);