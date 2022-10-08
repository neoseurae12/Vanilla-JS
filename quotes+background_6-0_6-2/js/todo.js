const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

function paintToDo(newTodo) {
    //console.log("i will paint", newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");

    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    //console.log(toDoInput.value);
    const newTodo = toDoInput.value;    // input의 현재 value를 새로운 변수에 복사함
    //console.log(toDoInput.value);
    toDoInput.value = "";
    //console.log(newTodo, toDoInput.value);
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);