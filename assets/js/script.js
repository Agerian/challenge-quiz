// Variables & Constants
let questionList = 0; // Track list of questions
let time = 60; // Track time in seconds
let timerInterval; // Will control the countdown
let score = 0; // Track player score

//HTML Elements
const startButton = document.getElementById("start-button");
const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");
const timer = document.getElementById("timer");

//Quiz questions
const quizQuestions = [ // Created an array to store questions and answer choices
  {
    question: "Commonly used data types DO NOT include:", // Question property (actual question)
    choices: ["Strings", "Booleans", "Alerts", "Numbers"], // Choices property (array of possible answers)
    answer: 2, // Answer property (Index of the correct answer within the array)
  },
  {
    question: "The condition in an if/else statement is enclosed within _____.",
    choices: ["Quotes", "Curly Brakets", "Parenthesis", "Square Brackets"],
    answer: 2,
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
    answer: 3,
  },
  {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
    answer: 2,
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "Terminal/Bash", "For Loops", "console.log"],
    answer: 3,
  },
  {
    question: "What is the result of the following expression : 5 + '5' in JavaScript?",
    choices: ["10", "55", "Error", "Undefined"],
    answer: 1,
  },
  {
    question: "What is the purpose of the `console.log()` function in JavaScript?",
    choices: ["Display a message box", "Print output to the console", "Execute a loop", "Define a variable"],
    answer: 1,
  },
  {
    question: "Which keyword is used to define a function in JavaScript?",
    choices: ["method", "func", "define", "function"],
    answer: 3,
  },
  {
    question: "What is the result of `true + false` in JavaScript?",
    choices: ["1", "0", "truefalse", "NaN"],
    answer: 0,
  },
  {
    question: "Which of the following is not a valid JavaScript variable name?",
    choices: ["myVariable", "123variable", "_variable", "$variable"],
    answer: 1,
  },
];