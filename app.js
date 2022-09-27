const daysofWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonsense = [1, 2, "hello", false, null, undefined, true, "rowan"];

console.log(daysofWeek, nonsense);

// Get Item from Array
console.log(daysofWeek[4]);

// Add one more day to the array
daysofWeek.push('sun');
console.log(daysofWeek);

// const daysofWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// daysofWeek.push('sun');
// => const는 '상수'라 불변하다고 했는데 이게 어떻게 가능?
// : const는 '선언한 주소(박스)'를 바꿀수 없다는 말임.
// 따라서 박스 안의 내용물들을 추가하거나 삭제는 가능함.