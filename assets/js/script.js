//var to appear in the question and answers
var questions = document.querySelector(".question-title");
var answers = document.querySelector(".answers");
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 75;

//function for the countdown
document.getElementById("start-button").addEventListener("click", function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time remaining: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  })

function sendMessage() {
    timeEl.textContent = " ";
    var gameOver = document.createElement("img");
    gameOver.setAttribute("src", "images/image_1.jpg");
    mainEl.appendChild(gameOver);
  
  }
  
  setTime();

//function to move to the first question



// clic event to move to the first question
