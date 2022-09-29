const hellos = document.getElementsByClassName("hello");
console.log(hellos);    // hellos : 많은 h1들이 들어있는 'array(배열)'

const tags = document.getElementsByTagName("h1");
console.log(tags);

const target = document.querySelector(".hello h1");
console.log(target);    // 조건 만족하는 첫 번째 것만 선택됨

const targets = document.querySelectorAll(".hello h1");
console.log(targets);   // 조건 만족하는 모든 것 선택됨

const select = document.querySelector("div.hello:nth-child(3) h1"); 
// 질문: 조건을 만족하는 건 2개밖에 없는데 왜 3번째를 택해야 내가 원하는 대상이 선택되는가?
// 해결: nth-child는 "형제 요소" 중에서 n번째 형제를 선택하는 것임!
//      만약 div.hello들에만 순서를 정해 지칭하고 싶으면 nth-of-type을 사용해야 함
//      search src: https://velog.io/@1703979/TIL-07
console.log(select);
console.dir(select);

select.style.color = "blue";    // select object 내의 style object의 color 속성을 변경함

function handleSelectClick() {
    console.log("selected one is clicked!");
    select.style.color = "red";
}

function handllMouseEnter() {
    select.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    select.innerText = "Mouse is gone!";
}

select.addEventListener("click", handleSelectClick);
select.addEventListener("mouseenter", handllMouseEnter);
select.addEventListener("mouseleave", handleMouseLeave);

// window의 Event를 listen해보자

function handleWindowResize() {
    document.body.style.background = "tomato";
}

window.addEventListener("resize", handleWindowResize);


// window의 Event 中, clipboard와 관련된 Event를 listen해보자

function handleWindowCopy() {
    alert("copier!");
}

window.addEventListener("copy", handleWindowCopy);


// window의 Event 中, (wifi) Connection과 관련된 Event를 listen해보자

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOOD~");
}

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("offline", handleWindowOnline);