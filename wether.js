const wether = document.querySelector(".js-wether");

const API_KEY = "7dcda34d87a2a71c05f56b3ccf4436ab";
const COORDS = "coords";

function getWether(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(
            function(response){
                return response.json();
            }
        ).then(
            function(json){
                const temperature = json.main.temp;
                const place = json.name;
                wether.innerText = `${temperature} @ ${place}`
            }
        );
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWether(latitude, longitude)
}

function handleGeoError(){
    console.log("위치를 찾을 수 없습니다!!");
}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        //getWether
        const parseCoords = JSON.parse(loadedCoords);
        getWether(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();