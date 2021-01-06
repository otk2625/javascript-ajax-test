var a1 = 10;
var a2 = 10.5;
var a3 = "문자열";
var a4 = "문자열";
var a5 = true; // false
var a6 = [1, 2, 3, "문자"];
console.log(a6);
console.log(a6[0]);

var a7 = {
  username: "ssar",
  age: 10,
  point: 10.5,
  hobby: ["농구", "축구"],
};
console.log(a7);
console.log(a7.hobby[1]);

function hello(n) {
  console.log("hello함수 호출됨");
  return n;
}

var num = hello(10);
console.log(num);

var a8 = hello;
a8();

// ECMA 2016
var a9 = () => {
  console.log("a9실행됨");
};

a9();



