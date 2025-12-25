
const numbers = [1, 4, 3, 6, 7, 8, 9];

for (const number of numbers) {
  console.log(number);
}


const str ="freeCodeCamp";

for (const char of str) {
  console.log(char);
  // char=char+1; // This line will not affect the original string its for return a error 
}


const people = [{ name: "Alice", age: 25 },
     { name: "Bob", age: 30 },
      { name: "Charlie", age: 35
}];

for (const person of people) {
  console.log(`${person.name} is ${person.age} years old.`);
}