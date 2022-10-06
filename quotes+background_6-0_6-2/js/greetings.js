const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const NAMEVALUE_KEY = "namevalue";

function onLoginSubmit(event) {
    event.preventDefault();
    const namevalue = loginInput.value;
    localStorage.setItem(NAMEVALUE_KEY, namevalue);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(namevalue);
}

function paintGreetings(namevalue) {
    greeting.innerText = `Hello ${namevalue}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedNamevalue = localStorage.getItem(NAMEVALUE_KEY);

if (savedNamevalue === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    paintGreetings(savedNamevalue);
}