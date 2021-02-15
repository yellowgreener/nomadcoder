const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";


// to do list를 array로 저장하자!!!
// const toDos = []; << 타입 미스매치에러!!!!
let toDos = [];

function deleteToDo(event){
    event.preventDefault();
    const btn = event.target;
    const li = btn.parentNode;
    
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        //li.id : String -> Number
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
    console.log(toDos);
}

function saveToDos(){
    // localStorage는 String만 저장된다. 
    // 따라서 toDoObj(Object)를 String으로 변환시켜야한다. >> JSON.stringify 사용
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    // li를 생성하여 입력한 일정과 삭제버튼을 담는다.
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    // 입력받은 값들을 저장
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedtoDos = localStorage.getItem(TODOS_LS);
    if(loadedtoDos !== null){
        // String -> Object
        const parsedToDos = JSON.parse(loadedtoDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();