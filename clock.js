const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1"),
    clockDate = clockContainer.querySelector("h2");

function returnKorDay(getDay){
    //console.log(getDay);
    let korDay = '';

    switch(getDay){
        case 0:
        korDay = "일요일";
        break;
    case 1:
        korDay = "월요일";
        break;
    case 2:
        korDay = "화요일";
        break;
    case 3:
        korDay = "수요일";
        break;
    case 4:
        korDay = "목요일";
        break;
    case 5:
        korDay = "금요일";
        break;
    case 6:
        korDay = "토요일";
        break;
    }
    return korDay;
}

function getTime(){
    const date = new Date();
    // getMonth는 0부터 시작되므로 1을 더해준다.
    const months = date.getMonth() + 1;
    const dates = date.getDate();
    // getDay는 요일이 숫자로 표기 되므로 한글로 변환시켜주는 함수를 사용한다.
    const dayOfWeek = returnKorDay(date.getDay());
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clockDate.innerText = `${months}/${dates} ${dayOfWeek}`;
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
                                minutes < 10 ? `0${minutes}` : minutes}:${
                                    seconds < 10 ? `0${seconds}` : seconds}`;

}

function init(){
    getTime();
    setInterval(getTime, 1000);     //시간 실시간(1초=1000) 업데이트
}
init();