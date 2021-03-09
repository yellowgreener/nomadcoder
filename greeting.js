const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    changeNameBtn = document.querySelector(".changeName");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function changeName(event){
    event.preventDefault();
    let changeValue = prompt("변경하실 이름을 입력하세요");
    paintGreeting(changeValue);
    saveName(changeValue);
}

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();                 // 기본 submit 이벤트 중지
    let currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);                 // 새로고침해도 저장된 값을 기억한다.
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    changeNameBtn.setAttribute('style', 'display:block');
    greeting.innerText = `${text}님 반가워요!!!`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
    changeNameBtn.addEventListener("click", changeName);
}

init();