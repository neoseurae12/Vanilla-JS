// 함수(function), 인자

function sayHello(nameOfPerson, age) {
    console.log("Hello my nama is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

function plus(a, b) {
    console.log(a+b);
}

function divide(a, b) {
    console.log(a / b);
}

plus(8, 60);
divide(98, 20);


// player.sayHello()

const player = {
    name: "nico",
    sayHello: function(otherPersonsName){
        console.log("hellO " + otherPersonsName + " Nice to meet you");
    },
}

console.log(player.name);
player.sayHello("lynn");
player.sayHello("jacob");
player.sayHello("nico");