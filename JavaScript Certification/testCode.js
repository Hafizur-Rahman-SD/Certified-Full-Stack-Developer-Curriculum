
// What Is Bracket Notation, and How Do You Access Characters from a String?


let abc="Hafizur";
console.log(abc[5]);


console.log(abc[abc.length -3]);  //its came last to first


let firstLetter=abc[0] +abc[1] + abc[2];  //add string char 
console.log(firstLetter);


//new line in String \n
let poem = "Roses are red. \nViolets are blue. \nSugar is sweet. \nAnd so are you.";
console.log(poem);

let poem2 = "Roses are red. \n 'I am your Dad' ";
console.log(poem2);

let day="To\day's day name Is Monday";
console.log(day);


const name="Hafizur";
const age=22;
const country="Bangladesh";
const message= `my name is ${name}. I am ${age} years old. I live on ${country}.`;
console.log(message);


const song="I love you \n You love me \n We are a happy family";
const score=9.5;
const highScore=10;
const output= `one of my favourite song is : "${song}". \n I rated it ${(score / highScore) *100}%`;
console.log(output);


//substring in a string\
let sentence = "Javascript is awsome, and javascript is fun.";
let position = sentence.indexOf("javaScript"); //case sensitive
console.log(position); // Output: -1

let position2 = sentence.toLowerCase().indexOf("javascript");
console.log(position2); // Output: 0


//promt method 

