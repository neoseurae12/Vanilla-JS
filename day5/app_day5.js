const back = document.querySelector("body");
//const windowSize = window.innerWidth;

function handleResizes() {
    const windowSize = window.innerWidth;
    if (windowSize > 800) {
        back.className = "bigscreen";
        //console.log(window.innerWidth);
    } else if (windowSize > 500) {
        back.className = "midscreen";
        //console.log(window.innerWidth);
    } else {
        back.className = "smallscreen";
        //console.log(window.innerWidth);
    }
}

window.addEventListener("resize", handleResizes);