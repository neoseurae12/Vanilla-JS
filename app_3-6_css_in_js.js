const h1 = document.querySelector("div.hello:nth-child(3) h1");

function handleH1Click() {
    const currnetColor = h1.style.color
    let newColor;

    if(currnetColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
    console.log(h1.style.color);
}

console.dir(h1);
h1.addEventListener("click", handleH1Click);