// //Build a Factorial Calculator
// A factorial is the product of an integer and all the integers below it. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120. In this lab, you will create a factorial calculator that takes a number from the user and calculates the factorial of that number.



let num = 5; // You can change this value to test with different numbers
function factorialCalculator(num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

let factorial = factorialCalculator(num);
let resultMsg = `The factorial of ${num} is ${factorial}.`;
console.log(resultMsg);