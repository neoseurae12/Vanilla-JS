const clockChristmas = document.getElementById("clockChristmas");

const dateChristmas = new Date('2022/12/25');

const DAY = 1000*60*60*24;
const HOUR = 1000*60*60;
const MINUTE = 1000*60;
const SECOND = 1000;

function setClock() {
    const datenow = new Date();
    const DDAY = Math.abs(dateChristmas - datenow);

    const days = String(Math.floor(DDAY / DAY)).padStart(2, "0");
    const hours = String(Math.floor((DDAY % DAY) / HOUR)).padStart(2, "0");
    const mins = String(Math.floor(((DDAY % DAY % HOUR) / MINUTE))).padStart(2, "0");
    const secs = String(Math.floor((DDAY % DAY % HOUR % MINUTE) / SECOND)).padStart(2, "0");

    clockChristmas.innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;
}

setClock();
setInterval(setClock, 1000);