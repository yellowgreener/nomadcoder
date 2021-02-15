// console.log('I am Working, I am Beautiful!');


// /*
// ▶ 변수
// let: 변수의 값이 변하는 것을 허용함
// const: 변수의 값이 변하는 것을 허용하지 않음
// var: 변수의 값이 바뀌는 것을 허용함 

// var, let, const의 차이점
// 1. var는 함수 레벨 스코프이고 let, const는 블럭 레벨 스코프입니다.
// 2. var로 선언한 변수는 선언 전에 사용해도 에러가 나지 않지만 let, const는 에러가 발생합니다.
// 3. var는 이미 선언되어있는 이름과 같은 이름으로 변수를 또 선언해도 에러가 나지 않지만 let, const는 이미 존재하는 변수와 같은 이름의 변수를 또 선언하면 에러가 납니다.
// 4. var, let은 변수 선언시 초기 값을 주지 않아도 되지만 const는 반드시 초기값을 할당해야 합니다.
// 5. var, let은 값을 다시 할당할 수 있지만 const는 한번 할당한 값은 변경할 수 없습니다(단, 객체 안에 프로퍼티가 변경되는 것까지 막지는 못합니다).
// [참고] https://medium.com/@yeon22/javascript-var-let-const%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-9fab5c264c9c

// var a = 2322; >> 3년 전까지만 해도 javascript에서는 var를 사용했다. 최근에는 let과 const(상수)를 사용한다.
// const a = 2322; >> const는 값이 변하는 것을 허용하지 않으므로 에러가 발생한다.
// */

// let a = 2322;
// let b = a - 333;

// a = 4
// /*
// [Error]
// index.js:10 Uncaught TypeError: Assignment to constant variable.
// at index.js:25
// */
// console.log(b, a);


// /* String
// const what = "Nicolas";
// console.log(what);
// */

// /* Boolean: True(1) or False(0)
// const wat = true;
// console.log(wat);
// */

// /* Number
// const num = 000;
// */

// /* Float
// const number = 7987.55;
// */

// /*Array
// const daysOfWeek = ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"];
// console.log(daysOfWeek);
// */

// //Object
// const someoneInfo = {
//     name: "Nico",
//     age: 33,
//     gender: "Male",
//     isHandsome: true,
//     favMovies: ["Soul", "Inside"],
//     favFood: [
//         {
//             name: "Kimchi", fatty:false
//         }, 
//         {
//             name: "chicken", fatty: true
//         }
//     ]
// };
// console.log(someoneInfo, console);
// /*
// ▶ 내장함수: console.log, alert, ...
// */

// /*
// someoneInfo.age = 54;
// console.log(someoneInfo.age);
// */

// function sayHello( name, age ){
//     //console.log('Hello!!!', name, "You have", age, "years of age.");
//     //▼백틱(`)을 사용해보자.
//     //console.log(`Hello ${name} you are ${age} years old`);
//     return `Hello ${name} you are ${age} years old`;
// }

// //sayHello('Jay', 55);
// const greetNico = sayHello("nico", 46);
// console.log(greetNico);


// const calculator = {
//     plus: function(a, b){
//         return a + b;
//     },
//     minus: function(a, b){
//         return a - b;  
//     },
//     multiple: function(a, b){
//         return a * b;
//     },
//     divide: function(a, b){
//         return a / b;
//     },
//     remainder: function(a, b){
//         return a % b;
//     },
//     power: function(a, b){
//         return a ** b;
//     }
// }

// const number = [14, 2];
// const result = {
//     plus: calculator.plus(number[0], number[1]),
//     minus: calculator.minus(number[0], number[1]),
//     multiple: calculator.multiple(number[0], number[1]),
//     divide: calculator.divide(number[0], number[1]),
//     remainder: calculator.remainder(number[0], number[1]),
//     power: calculator.power(number[0], number[1])
// };

// console.log(number, result);

// // ▶DOM(Document Object Module)


// //const title = document.getElementById("title");
// const title = document.querySelector("#title");
// title.innerHTML = "LA";
// title.style.color = "red";
// //console.log(title);
// //console.dir(title); //모든 속성보기
// console.dir(document); //모든 속성보기
// document.title = "waffle!"

// function handResize(event){
//     console.log(event);
// }

// // window.addEventListener("resize", handResize());     << 함수 바로 실행
// window.addEventListener("resize", handResize);          //<< event 발생시 실행

const title = document.querySelector("#title");

const BASE_COLOR = "yellow";
const OTHER_COLOR = "#7f8c8d";

const CLICKED_CLASS = "clicked";

function handleClick(){
    // // <직접 css변경하기>
    // const currentColor = title.style.color;
    // if (currentColor === BASE_COLOR){
    //     title.style.color = OTHER_COLOR;
    // }else{
    //     title.style.color = BASE_COLOR;
    // }
    
    // // <클래스 지정해서 css변경하기>
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(!hasClass){
    //     title.classList.add(CLICKED_CLASS);
    // }else{
    //     title.classList.remove(CLICKED_CLASS);
    // }

    // // <Toggle사용>
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.style.color = "BASE_COLOR";
    // title.addEventListener("click", handleClick);
    title.addEventListener("mouseenter", handleClick);
}
init();

// 와이파이 ON/OFF
// function handleOffline(){
//     console.log("Bye bye");
// }

// function handleOnline(){
//     console.log("Welcome back");
// }

// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline);

// //▶조건문
// if("10" === 10) {
//     console.log("right!!!");
// }else{
//     console.log("wrong!!!");
// }

// if(20 > 6 && "nicolas" == "nicolas"){
//     console.log("yes!");
// }else{
//     console.log("no!!");
// }

// const age = 2021 - prompt("당신의 출생년도를 입력하세요");
// //console.log(age);
// if(age > 19 && age <= 21){
//     console.log("당신은 성인입니다. 술은 마실 수 있지만... 많이 먹지 마세요.");
// }else if(age > 21){
//     console.log("지나친 음주는 당신의 건강과 통장에게 치명적입니다.");
// }else{
//     console.log("만 19세 미만의 청소년은 술을 마시면 안됩니다!! 콜라 마시세요!!!");
// }

