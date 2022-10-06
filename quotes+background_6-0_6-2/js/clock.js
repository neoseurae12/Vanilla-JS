const clock = document.getElementById("clock");

function getClock() {
    const date = new Date();    // Date 객체
    //console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    //clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const hours = String(date.getHours()).padStart(2, "0"); // number -> String // .padStart => 5 (X), 05 (O)
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

//setInterval(sayHello, 5000);
//setTimeout(sayHello, 5000);

getClock()  // 새로고침 하자마자 시간 보이게
setInterval(getClock, 1000);    // 1초마다 반복