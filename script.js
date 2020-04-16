// VARIABLES DECLARED!

var startButton = document.getElementById("start-quiz");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var endScreen = document.getElementById("end-screen");
var timeLeft = 35;
var timer = document.getElementById("timer");
var timerId = setInterval(countDown, 1000);

// var finalScore = ......

// START BUTTON EVENT LISTENER AND FUNCTION TO NEXT SCREEN

startButton.addEventListener("click", function () {
  console.log("start button clicked");

  startScreen.classList.add("hide");
  quizScreen.classList.remove("hide");
  console.log("begin timer countdown: ");
  countDown();
});

// DISPLAY TIMER FUNCTION

function countDown() {
  if (timeLeft === 0) {
    var timerId = setInterval(countDown, 1000);
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

var myQuestions = [
  new Question("who invented this?", ["douglas", "carole", "joe"], "joe"),
  new Question("which is correct?", ["me", "you", "her"], "her"),
  new Question("who do you like better?", ["emilie", "jp", "clara"], "clara"),
];
var quiz = new Quiz(myQuestions);

// QUIZ FUNCTIONS

function Questions(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

myQuestions.prototype.correctAnswer = function (choice) {
  return choice === this.answer;
};
// need further explanation on what the prototype means here

// confused a bit here... could i just continue on the previous "onClick" for when timeLeft === 0 and run the showScores function there?
function populate() {
  if (timeLeft === 0) {
    showScores();
  } else {
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }
    // showProgress();
  }
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  };
}

// function showProgress() {
//   var currentQuestionNumber = quiz.questionIndex + 1;
//   var element = document.getElementById("progress");
//   element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.myQuestions.length;
// };

// function showScores() {
//   var gameOverHtml = document.getElementById("score");
//   gameOverHtml +

// }

// var lastQuestion = myQuestions.length - 1;

// END SCREEN

document.getElementById("score").textContent = "asdfghjkjhgfdsdfghjk";
