//Build a Quiz Game

const questions = [
  {
    category: "JavaScript",
    question: "Which keyword declares a variable that cannot be reassigned?",
    choices: ["let", "var", "const"],
    answer: "const"
  },
  {
    category: "Web",
    question: "Which HTML tag is used for the largest heading?",
    choices: ["<h1>", "<h3>", "<p>"],
    answer: "<h1>"
  },
  {
    category: "CSS",
    question: "Which CSS property changes text color?",
    choices: ["font-size", "color", "margin"],
    answer: "color"
  },
  {
    category: "Programming",
    question: "What does API stand for?",
    choices: ["Application Programming Interface", "Advanced Program Input", "Applied Protocol Internet"],
    answer: "Application Programming Interface"
  },
  {
    category: "Data",
    question: "Which of these is a JavaScript array method?",
    choices: ["push", "print", "insert"],
    answer: "push"
  }
];

function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

// 3 Get a random choice from the choices array
function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

// 4 Check if computer's choice is correct or not
function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  }
  return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
}

/* (Optional) quick demo run: */
const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log(randomQuestion);
console.log("Computer chose:", computerChoice);
console.log(getResults(randomQuestion, computerChoice));
