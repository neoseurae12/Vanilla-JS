const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {    // OR(||) 사용
    // non-숫자 또는 음수 입력 시
    console.log("Please write a nutural number");
} else if (age < 18) {
    console.log("You are too young..");
} else if (age >= 18 && age < 50) { // AND(&&) 사용
    console.log("eNjoy your drink!");
} else if (age < 80) {
    console.log("You should reduce your drink")
} else if (age === 100) {   // === 사용
    console.log("Wow.. Anyway, Happy 100th Birthday!")
} else if (age >= 80) {
    console.log("Drinks Hardly Recommended");
} 
// else가 필수는 아님