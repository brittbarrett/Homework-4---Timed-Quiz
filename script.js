// VARIABLES DECLARED!

var startButton = document.getElementById("start-quiz");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var endScreen = document.getElementById("end-screen");
var questionDisplay = document.getElementById("question");
var progressEl = document.getElementById("question-title");
var timer = document.getElementById("timer");
var timeLeft = 30;
var timerId;

// var finalScore = ......

// RENDER QUIZ QUESTIONS

function displayQuestion(obj) {
  questionDisplay.textContent = obj.question;

  for (var i = 0; i < obj.choice.length; i++) {
    document.getElementById("choice" + i).textContent = obj.choice[i];
  }
}

// START BUTTON EVENT LISTENER AND FUNCTION TO NEXT SCREEN

startButton.addEventListener("click", function () {
  console.log("start button clicked");

  startScreen.classList.add("hide");
  quizScreen.classList.remove("hide");
  console.log("begin timer countdown: ");
  timerId = setInterval(countDown, 1000);
  countDown();
  displayQuestion(myQuestions[currentQuestion]);
});

// DISPLAY TIMER FUNCTION

function countDown() {
  if (timeLeft === 0) {
    clearTimeout(timerId);
    //GO TO END SCREEN
    quizScreen.classList.add("hide");
    endScreen.classList.remove("hide");

    console.log("time is out, go to end screen.");
  } else {
    timer.textContent = timeLeft + " seconds remaining!";
    timeLeft--;
  }
}

// PROGRESS FUNCTION

// ON CLICK FOR THE QUESTIONS AND ANSWERS

document.addEventListener("click", function (event) {
  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches(".answer-button")) {
    console.log("users choice:", event.target.textContent);
    var userChoice = event.target.textContent;
    var correctAnswer = myQuestions[currentQuestion].answer;
    console.log("the correct answer:", correctAnswer);

    if (userChoice === correctAnswer) {
      currentQuestion++;
      displayQuestion();
      // increment point value //
    } else {
      // decrease time
      timeLeft -= 10;
    }
  }
});

// var answerButtons = document.getElementsByClassName("answer-button");
// console.log(answerButtons);

// for (var i = 0; i < answerButtons.length; i++) {
//   console.log(answerButtons[i]);
// }

var myQuestions = [
  {
    question: "How many different species of elephant are there?",
    choice: ["Three", "Two", "One"],
    answer: "Three!",
  },
  {
    question: "Which gender of African elephants have tusks?",
    choice: ["Male", "Female", "Both"],
    answer: "Both",
  },
  {
    question: "An elephant herd consists of ...?",
    choice: ["Males & females", "Related females", "Related males"],
    answer: "Related females",
  },
  {
    question: "On average, how many hours a day does an elephant spend eating?",
    choice: ["4", "10", "16"],
    answer: "16",
  },
];

var currentQuestion = 0;
console.log(myQuestions);
console.log(myQuestions[currentQuestion].question);

// END SCREEN

document.getElementById("score").textContent = "asdfghjkjhgfdsdfghjk";
