const API_KEY = "587d7ad168f42acdf3e4bc3b4340a520";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#info__city");
        const temp = document.querySelector("#info__temp span");
        temp.innerHTML = Math.floor(data.main.temp);
        city.innerText = data.name;
    });
}

function onGeoError() {
    alert("Can't find you. No weater for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);