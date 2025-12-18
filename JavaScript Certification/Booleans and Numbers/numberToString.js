//What Happens When You Try to Do Calculations with Numbers and Strings?
const substract = 10 - '4';
console.log(substract); // 6
console.log(typeof substract); // number

const multiply = 5 * '3';
console.log(multiply); // 15
console.log(typeof multiply); // number

const divide = 20 / '5';
console.log(divide);    // 4
console.log(typeof divide); // number

const invalidOperation = 7 - 'two';
console.log(invalidOperation); // NaN
console.log(typeof invalidOperation); // number

const addition = 10 + '5';
console.log(addition); // "105"
console.log(typeof addition); // string


const stringNumber = '8';
const convertedNumber = Number(stringNumber);
const correctAddition = 10 + convertedNumber;
console.log(correctAddition); // 18
console.log(typeof correctAddition); // number

//string to number conversiton using - operator
const secondStringNumber = "Eight"-5;
console.log(secondStringNumber); // NaN
console.log(typeof secondStringNumber); // number   
const validSubtraction = "15"-5;
console.log(validSubtraction); // 10
console.log(typeof validSubtraction); // number
