const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber){
    const image = new Image();
    // image.src = `/images/vincentVanGogh${imgNumber + 1}.jpg`;
    // github.io 에서 사용하기 위해 코드 변경
    image.src = `https://yellowgreener.github.io/nomadcoder/images/vincentVanGogh${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRendom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRendom();
    paintImage(randomNumber);
}

init();
