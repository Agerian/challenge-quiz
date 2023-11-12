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

// Function for the Quiz
function startQuiz() {
  startButton.classList.add("hidden"); // Adds class 'hidden' to button hidding it
  questionContainer.classList.remove("hidden"); // Removes class 'hidden' from question conatiner
  startTimer(); // Calls the startTimer function (need to create)
  displayQuestion(); // Calls the displayQuestion function (need to create)
};

// Function for Displaying a question
function displayQuestion() {
  const currentQuestion = quizQuestions[questionList];
  const questionText = document.getElementById("question-text");
  questionText.textContent = currentQuestion.question; // Sets text content of 'questionText' element to the value of the current question

  for (let i = 0; i < currentQuestion.choices.length; i++) { // Loop iterating through each answer choice
    const choiceButton = document.getElementById(`choice${i}`); // Selects HTML button by id and assigns it to the variable choiceButton
    choiceButton.textContent = currentQuestion.choices[i]; // Text of selected button matched to answer choice of current index. Answers pulled from currentQuestion array
    choiceButton.addEventListener("click", () => checkAnswer(i)); // Calls checkAnswer function
  }
};

// Function to Check Answers
function checkAnswer(selectedIndex) {

  if(selectedIndex === currentQuestion.correctAnswer) {
    score += 10; // Correct answer increase score
  } else {
    time -= 10; // Incorrect answers deduct time
  }

  questionList++; // Proceeds to the next question

  if (questionList < quizQuestions.length) {
    displayQuestion();
  } else {
    endQuiz();
  };
};

// Timer Function
function updateTimer()  {
  if (time <= 0) { // If time is up, end the quiz
    endQuiz();
  } else {  // Update the timer display otherwise
    timer.textContent = time;
    time--;
  }
};

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

// Ending the Quiz Function
function endQuiz() {
  clearInterval(timerInterval);
};