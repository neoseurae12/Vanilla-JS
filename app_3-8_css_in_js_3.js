const h1 = document.querySelector("div.hello:nth-child(3) h1");

function handleTitleClick() {
    const clickedClass = "active";
    if (!h1.classList.contains(clickedClass)) {
        // 버그 발생; 원래 있던 className을 포함해서 '모든' class name을 변경해버림
        h1.classList.add(clickedClass);
    } else {
        h1.classList.remove(clickedClass);
    }
}

h1.addEventListener("click", handleTitleClick);


// toggle function -- 위와 똑같은 동작, but 해결 with only "one" line

const h1Toggle = document.querySelector("h1.hello:nth-child(6)");

function handleH1Toggle() {
    // 어차피 "active" 한 번만 쓰이니까 constant 쓸 필요 X
    //const clickedClass = "active";
    h1Toggle.classList.toggle("active");
}

h1Toggle.addEventListener("click", handleH1Toggle);