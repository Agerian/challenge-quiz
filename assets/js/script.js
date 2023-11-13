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

// Variables & Constants
let questionList = 0; // Track list of questions
let time = 60; // Track time in seconds
let timerInterval; // Will control the countdown
let score = 0; // Track player score

//HTML Elements
const startButton = document.getElementById("start-button");
const questionScreen = document.getElementById("question-screen");
const choicesContainer = document.getElementById("choices-container");
const timer = document.getElementById("timer");
const timeRemaining = document.getElementById("time-remaining");
const questionText = document.getElementById("question-text");

// Function for the Quiz
function startQuiz() {
  startButton.classList.add("hidden"); // Adds class 'hidden' to button hidding it
  questionScreen.classList.remove("hidden"); // Removes class 'hidden' from question conatiner
  timer.classList.remove("hidden");
  startTimer(); // Calls the startTimer function (need to create)
  displayQuestion(0); // Calls the displayQuestion function (need to create)
};

// Function for Displaying a question
function displayQuestion(index) {
  if (index < quizQuestions.length) {
    questionText.textContent = 
      `Question ${index + 1}: ${quizQuestions[index].question}`; //Template string to directly input question
    choicesContainer.innerHTML = ""; // Clear buttons of text
    
    // For loop setting buttons with possible answer choices
    for (let i = 0; i < quizQuestions[index].choices.length; i++) {
      const choiceButton = document.createElement("button"); // Creates new buttons
      choiceButton.textContent = quizQuestions[index].choices[i]; // Sets the text of the buttons based on the current question in the specified index, iterating through the possible choices for 'choices'

      choiceButton.addEventListener("click", function() { // Listen for click and calls function
        const selectedChoice = i;
        checkAnswer(index, selectedChoice); // Check question specified by index, 
      });
      choicesContainer.appendChild(choiceButton);
    }
  } else {
    endQuiz();
  }
}

// Function to Check Answers
function checkAnswer(index, selectedChoice) {

  if(selectedChoice === quizQuestions[index].answer) {
    score += 10; // Correct answer increase score
  } else {
    time -= 10; // Incorrect answers deduct time
  }

  questionList++; // Proceeds to the next question

  if (questionList < quizQuestions.length) {
    displayQuestion(questionList);
  } else {
    endQuiz();
  };
};

// Timer Function
function startTimer() {
  timerInterval = setInterval(function() {
    timeRemaining.textContent = time;
    
    if (time <= 0) {
      endQuiz();
    }
    time--;
  }, 1000);
}

// Ending the Quiz Function
function endQuiz() {
  clearInterval(timerInterval); // Stop the timer Interval
  questionScreen.classList.add("hidden"); // Class to hide the Question screen

  const gameOverScreen = document.getElementById("game-over");
  const finalScore = document.getElementById("final-score");
  finalScore.textContent = score;
  gameOverScreen.classList.remove("hidden");
};

startButton.addEventListener("click", startQuiz);