const h1 = document.querySelector("div.hello:nth-child(3) h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    if (h1.className !== clickedClass) {
        // 버그 발생; 원래 있던 className을 포함해서 '모든' class name을 변경해버림
        h1.className = clickedClass;
    } else {
        h1.className = "";
    }
}

h1.addEventListener("click", handleTitleClick);

