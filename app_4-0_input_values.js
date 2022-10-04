const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");
//const loginLink = document.querySelector("a");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const NAMEVALUE_KEY = "namevalue";

// 위의 3줄과 동일한 context
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function handleLoginBtnClick() {
//     //console.dir(loginInput);  // 객체
//     //console.log(loginInput);
//     //console.log("click!!!!");
    
//     //console.log(loginInput.value);

//     const namevalue = loginInput.value;

//     // HTML 자체의 기능으로 충분히 커버 가능
//     // if (namevalue === "") {
//     //     alert("Please write your name");
//     // } else if (namevalue.length > 15) {
//     //     alert("Your name is too long!");
//     // }
//     // 단, input의 유효성 검사를 작동시키기 위해서는 input이 "form" 태그 안에 있어야 됨.

//     console.log(namevalue);
// }

function onLoginSubmit(event) {
    //console.dir(event);
    event.preventDefault(); // 브라우저의 기본 동작 막아줌
    //console.log(event); // SubmitEvent
    const namevalue = loginInput.value;
    localStorage.setItem(NAMEVALUE_KEY, namevalue);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //console.dir(greeting);
    //greeting.innerText = "Hello " + namevalue;
    // greeting.innerText = `Hello ${namevalue}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(namevalue);
}

function paintGreetings(namevalue) {
    greeting.innerText = `Hello ${namevalue}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// function onLinkClick(event) {
//     //alert("clicked!!!!");   // 모든 동작을 잠시 막음
//     console.dir(event); // MouseEvent(또는 PointerEvent)
//     event.preventDefault();
// }

const savedNamevalue = localStorage.getItem(NAMEVALUE_KEY);

if (savedNamevalue === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    //loginButton.addEventListener("click", handleLoginBtnClick);
    loginForm.addEventListener("submit", onLoginSubmit);
    //loginLink.addEventListener("click", onLinkClick);
} else {
    // show the greeting
    // greeting.innerText = `Hello ${savedNamevalue}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedNamevalue);
}