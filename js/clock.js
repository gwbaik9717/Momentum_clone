const clock = document.querySelector('#clock');

function getClock(){
    const date =  new Date();
    clock.innerText = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}


getClock() //최초 로딩시 바로 실행
setInterval(getClock, 1000);