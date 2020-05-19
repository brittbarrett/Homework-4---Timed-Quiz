//VARIABLE DECLARATIONS
//declare an array of objects for questions in global memory
var myQuestions = [
  {
    title: "How many different species of elephant are there?",
    choice: ["Three", "Two", "One"],
    answer: "Three",
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
var currentQuestion;
//declare variables to reference DOM elements
var startButton = document.getElementById("start-quiz");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var endScreen = document.getElementById("end-screen");
var questionDisplay = document.getElementById("question");
var progressElement = document.getElementById("question-title");
var choicesElement = document.getElementById("choices");
var timer = document.getElementById("timer");
var timeLeft = 20;
var timerId;
var scoreArray = JSON.parse(localStorage.getItem("userScore"));
//console.log(localStorage.getItem("name"))// Checks to see if the todolist exists in localStorage and is an array currently
// If not, set a local list variable to an empty array
// Otherwise list is our current list of todos
if (!Array.isArray(scoreArray)) {
  scoreArray = [];
}

var total = 0;
// var finalScore = ......
// RENDER QUIZ QUESTIONS
//FUNCTIONS

//onclick event
//grab the userinput and user's score
function submitUser() {
  console.log(total);
  console.log(document.querySelector("#userInitial").value);
  var userObj = {
    name: document.querySelector("#userInitial").value,
    points: total,
  };
  console.log(userObj);
  scoreArray.push(userObj);
  localStorage.setItem("userScore", JSON.stringify(scoreArray));
  displayScore;
}
displayScore();
submitUser();
function displayScore() {
  //display all the scores
  //display the current high score

  var highScoreIndex = 0;
  for (var i = 0; i < scoreArray.length; i++) {
    document.getElementById("score").textContent = scoreArray[i].points;

    if (scoreArray[i].points > scoreArray[highScoreIndex].points) {
      highScoreIndex = i;
    }
    console.log(scoreArray[i].name);
    console.log(scoreArray[i].points);
    var p = document.createElement("p");
    p.setAttribute("id", "rankingAttr");
    p.textContent = scoreArray[i].name + " | " + scoreArray[i].points;
    document.querySelector("#ranking").appendChild(p);
  }

  var p2 = document.createElement("p");
  p.setAttribute("id", "bestScore");
  p2.textContent =
    scoreArray[highScoreIndex].name + " | " + scoreArray[highScoreIndex].points;
  document.querySelector("#topScore").appendChild(p2);
}

function startQuiz() {
  displayQuestion();
  // function to select countdown
  // function to select render question
}
function clickQuestion() {
  //check if user guessed incorrectly
  //notify user if answer was right or wrong
  //alert("clicked");
  console.log(this.value);
  console.log(myQuestions[currentQuestionIndex].answer);
  if (this.value == myQuestions[currentQuestionIndex].answer) {
    console.log("correct");
    total++;
    console.log(total);
  } else {
    console.log("wrong");
    //subtract time
  }
  //grab userinput and validate it against the answer
  //go to the next question
  currentQuestionIndex++;
  displayQuestion();
}

function displayQuestion() {
  //validate we still have a turn or not, if so display q
  //verify if questions are complete
  if (currentQuestionIndex < myQuestions.length) {
    //grab current question object from array
    currentQuestion = myQuestions[currentQuestionIndex];
    console.log(currentQuestion);
    //progressElement.textContent = currentQuestion.title;
    document.querySelector("#question-title").textContent =
      currentQuestion.title;
    //clear display of previous question
    choicesElement.innerHTML = "";
    for (var i = 0; i < myQuestions[currentQuestionIndex].choice.length; i++) {
      var btn = document.createElement("button");
      btn.setAttribute("class", "choice");
      btn.setAttribute("value", myQuestions[currentQuestionIndex].choice[i]);
      btn.textContent = myQuestions[currentQuestionIndex].choice[i];
      btn.onclick = clickQuestion;
      //btn.setAttribute("onclick", "clickQuestion()");
      document.querySelector("#choices").appendChild(btn);
      console.log(btn);
    }

    // THIS IS WHERE YOU LEFT OFF WITH VIVIAN

    //loop over array of choices
    // currentQuestion.choice.forEach(function (choice, i) {
    //   var choiceNode = document.createElement("button");
    //   choiceNode.setAttribute("class", "choice");
    //   choiceNode.setAttribute("value", choice);
    //   choiceNode.textContent = i + 1 + ". " + choice;
    //   choicesElement.appendChild(choiceNode);
    //   // choiceNode.addEventListener("click", function () {
    //   //   clickQuestion();
    //   // });
    // });
  } else {
    alert("GAME OVER");
    quizScreen.classList.add("hide");
    endScreen.classList.remove("hide");
    clearTimeout(timerId);
    //show the submit area
    //display score
    //later ask for initals and put to local storage
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
// document.addEventListener("click", function (event) {
//   // If the clicked element doesn't have the right selector, bail
//   if (!event.target.matches(".answer-button")) {
//     // console.log("users choice:", event.target.textContent);
//     var userChoice = event.target.textContent;
//     var correctAnswer = myQuestions[currentQuestionIndex].answer;
//     console.log("the correct answer:", correctAnswer);
//     if (userChoice === correctAnswer) {
//       displayQuestion();
//       // increment point value //
//     } else {
//       // decrease time
//       timeLeft -= 10;
//     }
//     currentQuestionIndex++;
//   }
// });
var answerButtons = document.getElementsByClassName("answer-button");
// console.log(answerButtons);
// for (var i = 0; i < answerButtons.length; i++) {
//   console.log(answerButtons[i]);
// }
// console.log(myQuestions);
// console.log(myQuestions[currentQuestionIndex].question);
// END SCREEN
