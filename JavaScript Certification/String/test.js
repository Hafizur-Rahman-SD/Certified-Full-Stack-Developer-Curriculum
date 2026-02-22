let num = 5.7;
console.log(num.toString());
let arr = [1, 2, 3, 4, 5];
console.log(arr.toString());

let obj = { name: "John", age: 30 };
console.log(obj.toString());

const myNum = new Number("34");
console.log(typeof myNum);


const emptyArr = Number([]);
const arrOneNum = Number([7]);
const arrMultiNum = Number([7, 36, 12]);
const arrStr = Number(["str1"]);
const arrMultiStr = Number(["str1", "str2"]);

console.log(emptyArr); // 0
console.log(arrOneNum); // 7
console.log(arrMultiNum); // NaN
console.log(arrStr); // NaN
console.log(arrMultiStr); // NaN