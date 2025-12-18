//How Does Operator Precedence Work?

const result=2+3*4;
console.log(result); //14

const result2 =2**3**2;
console.log(result2); //512

let a=5;
let b=10;
let c=15;

console.log(a>b - c); //false
console.log(a < b - c); //true
console.log(a + b > c); //false
console.log(a + b < c); //true
console.log(a + b === c); //true
console.log(a + b !== c); //false
console.log(a * b >= c); //true
console.log(a * b <= c); //false

const complexResult = (a + b) * c / (b - a);
console.log(complexResult); //75