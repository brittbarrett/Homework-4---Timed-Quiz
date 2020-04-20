//VARIABLE DECLARATIONS
//declare an array of objects for questions in global memory
var myQuestions = [
  {
    title: "How many different species of elephant are there?",
    choice: ["Three", "Two", "One"],
    answer: "Three!",
  },
  {
    title: "Which gender of African elephants have tusks?",
    choice: ["Male", "Female", "Both"],
    answer: "Both",
  },
  {
    title: "An elephant herd consists of ...?",
    choice: ["Males & females", "Related females", "Related males"],
    answer: "Related females",
  },
  {
    title: "On average, how many hours a day does an elephant spend eating?",
    choice: ["4", "10", "16"],
    answer: "16",
  },
];
var currentQuestionIndex = 0;
//declare variables to reference DOM elements
var startButton = document.getElementById("start-quiz");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var endScreen = document.getElementById("end-screen");
var questionDisplay = document.getElementById("question");
var progressElement = document.getElementById("question-title");
var choicesElement = document.getElementById("choices");
var timer = document.getElementById("timer");
var timeLeft = 30;
var timerId;
// var finalScore = ......
// RENDER QUIZ QUESTIONS
//FUNCTIONS
function startQuiz() {
  displayQuestion();
}
function displayQuestion() {
  //grab current question object from array
  var currentQuestion = myQuestions[currentQuestionIndex];
  console.log(currentQuestion);
  progressElement.textContent = currentQuestion.title;
  //clear display of previous question
  choicesElement.innerHTML = "";
  //loop over array of choices
  currentQuestion.choice.forEach(function (choice, i) {
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = i + 1 + ". " + choice;
    choicesElement.appendChild(choiceNode);
    choiceNode.addEventListener("click", function () {
      clickQuestion();
    });
  });
}
function clickQuestion() {
  //check if user guessed incorrectly
  //notify user if answer was right or wrong
  //go to the next question
  currentQuestionIndex++;
  //verify if questions are complete
  if (currentQuestionIndex === myQuestions.length) {
    //end the quiz
  } else {
    displayQuestion();
  }
}
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
//EVENT HANDLERS
// START BUTTON EVENT LISTENER AND FUNCTION TO NEXT SCREEN
startButton.addEventListener("click", function () {
  // console.log("start button clicked");
  startScreen.classList.add("hide");
  quizScreen.classList.remove("hide");
  // console.log("begin timer countdown: ");
  timerId = setInterval(countDown, 1000);
  countDown();
  startQuiz();
});
// DISPLAY TIMER FUNCTION
// PROGRESS FUNCTION
// ON CLICK FOR THE QUESTIONS AND ANSWERS
document.addEventListener("click", function (event) {
  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches(".answer-button")) {
    // console.log("users choice:", event.target.textContent);
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
var answerButtons = document.getElementsByClassName("answer-button");
console.log(answerButtons);
for (var i = 0; i < answerButtons.length; i++) {
  console.log(answerButtons[i]);
}
console.log(myQuestions);
console.log(myQuestions[currentQuestion].question);
// END SCREEN
document.getElementById("score").textContent = "asdfghjkjhgfdsdfghjk";
