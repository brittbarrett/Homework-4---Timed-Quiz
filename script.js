// VARIABLES DECLARED!

var startButton = document.getElementById("start-quiz");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var endScreen = document.getElementById("end-screen");
// var finalScore = ......

// START BUTTON EVENT LISTENER AND FUNCTION TO NEXT SCREEN

startButton.addEventListener("click", function () {
  console.log("start button clicked");

  startScreen.classList.add("hide");
  quizScreen.classList.remove("hide");
  console.log("begin timer countdown: ");
  countDown();
});

// MORE VARIABLES DECLARED

var timeLeft = 35;
var timer = document.getElementById("timer");

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
    timer.innerHTML = timeLeft + " seconds remaining!";
    timeLeft--;
  }
}

// RUN QUIZ (try to not use a for loop as it will get very complicated with the nexting. instead, try to use the index method we discussed)¸

// END SCREEN
document.getElementById("score").textContent = "asdfghjkjhgfdsdfghjk";
