const resetBtn = document.querySelector(".js-reset");

function resetInfo(){
    if(confirm("이름과 할 일 목록을 초기화합니다.")){
        alert('삭제된 정보는 되살릴 수 없습니다.');
        localStorage.clear();
        location.reload();
    }else{
        return;
    }

}

function handleSubmit(event){
    event.preventDefault();
    resetInfo();
}

function init(){
    resetBtn.addEventListener("click", handleSubmit);
}

init();