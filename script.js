// VARIABLES DECLARED!

var startButton = document.getElementById("start-quiz");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
// var finalScore =
// var timer = document.getElementById("timer");
var timeLeft = 45;
var timer = document.getElementById("timer");
var timerId = setInterval(countdown, 1000);
var endScreen = document.getElementById("end-screen");

// START BUTTON EVENT LISTENER AND FUNCTION TO NEXT SCREEN

startButton.addEventListener("click", function () {
  console.log("start button clicked");

  startScreen.classList.add("hide");
  quizScreen.classList.remove("hide");
});

// DISPLAY TIMER FUNCTION

function countdown() {
  if (timeLeft === 0) {
    clearTimeout(timerId);
    // onclick to go to last page
    quizScreen.classList.add("hide");
    endScreen.classList.remove("hide");
  } else {
    timer.textContent = timeLeft + " seconds remaining!";
  }
}

// RUN QUIZ (try to not use a for loop as it will get very complicated with the nexting. instead, try to use the index method we discussed)¸

// END SCREEN
document.getElementById("score").textContent = "asdfghjkjhgfdsdfghjk";
