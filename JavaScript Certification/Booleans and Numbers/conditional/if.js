
const age =25;

if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}


const temperature = 30;
const weather = temperature > 25 ? "It's a hot day." : "It's a cool day.";
console.log(`${weather} The temperature is ${temperature}°C.`);


let userInput ;
if (userInput || 'guest') {
    console.log(`Welcome, user Name`);
}
else {
    console.log("Your not logged in.");
}