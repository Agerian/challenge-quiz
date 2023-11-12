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

