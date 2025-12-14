const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);

const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

const dogsOnlySentence = exampleSentence.replace("cats", "dogs"); //first ime step 6 is without All but step 7 with All
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

const repeatedLove ="love ".repeat(3);
//console.log("After using the repeat() method to repeat 'love' 3 times:");
console.log(repeatedLove);

const newSentence = "I " + repeatedLove + " learning.";
console.log(newSentence);



//this is last step to add .trim()
//const repeatedLove ="love ".repeat(3).trim();
