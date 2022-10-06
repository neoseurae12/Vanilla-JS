const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
const button = document.querySelector("button");
const bgColor = document.createElement("style");
document.body.prepend(bgColor);

function onButtonClick() {
    const colorIdx1 = Math.floor(Math.random() * colors.length);
    const colorIdx2 = Math.floor(Math.random() * colors.length);
    const color1 = colors[colorIdx1];
    const color2 = colors[colorIdx2];
    
    bgColor.innerText = `body {background: linear-gradient(to right, ${color1} 0%, ${color2} 100%);}`;
}

button.addEventListener("click", onButtonClick);