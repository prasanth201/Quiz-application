let currentQuestion = 0;
let score = 0;
const totalQuestions = 5;
const quizData = [
  {
    question: "Question 1?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: "Option 1"
  },
  {
    question: "Question 2?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: "Option 2"
  },
  // Add more questions here
];

const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score");
const questionNumberElement = document.getElementById("questionNumber");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submitBtn");

function displayQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.textContent = currentQuizData.question;
  optionsElement.innerHTML = "";
  currentQuizData.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.setAttribute("data-index", index);
    optionsElement.appendChild(optionButton);
  });
  questionNumberElement.textContent = currentQuestion + 1;
  submitButton.disabled = false;
}

function checkAnswer(selectedButton) {
  submitButton.disabled = true;
  const selectedOptionIndex = parseInt(selectedButton.getAttribute("data-index"));
  const correctAnswer = quizData[currentQuestion].correctAnswer;
  if (quizData[currentQuestion].options[selectedOptionIndex] === correctAnswer) {
    score++;
    scoreElement.textContent = score;
    selectedButton.style.backgroundColor = "green";
  } else {
    selectedButton.style.backgroundColor = "red";
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < totalQuestions) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  alert("Quiz has ended!");
  // Add any other end of quiz logic here
}

displayQuestion();

// Timer functionality
let timeLeft = 10;
const countdown = setInterval(() => {
  timeLeft--;
  timerElement.textContent = timeLeft;
  if (timeLeft === 0) {
    clearInterval(countdown);
    nextQuestion();
  }
}, 1000);
