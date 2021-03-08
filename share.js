const share = document.querySelector(".js-share"),
    link = "https://yellowgreener.github.io/nomadcoder/";

function copyThat(){
    navigator.clipboard.writeText(link);
    alert("링크가 복사되었습니다.");
}

function handleSubmit(event){
    event.preventDefault();
    copyThat();
}

function init(){
    share.addEventListener("click", handleSubmit);
}

init();