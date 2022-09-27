const player = {
    name: "rowan",
    points: 10,
    fat: false
};

console.log(player);
console.log(player.name);

console.log(player["name"]);

// object의 내용을 업데이트도 가능
player.points = 12;
console.log(player);
// object가 동일만 하다면, object 안의 내용을 수정하는 건 constant로 선언됐어도 가능
// 에러는 constant 전체를 하나의 값으로서 업데이트 하려고 할 때 발생

// property를 '추가'하는 것도 가능
player.lastname = "potato";
console.log(player);