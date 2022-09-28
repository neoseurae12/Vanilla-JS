const calculator = {
    add: function(a, b) {
        console.log(a + b);
    },
    minus: function(a, b) {
        console.log(a - b);
    },
    divide: function(a, b) {
        console.log(a / b);
    },
    power: function(a, b) {
        console.log(a**b);
    },
};

calculator.add(6, 3);
calculator.minus(6, 3);
calculator.divide(6, 3);
calculator.power(6, 3);

// 코드 결과
// 9
// 3
// 2
// 216