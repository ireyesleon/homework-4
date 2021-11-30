//var to appear in the question and answers
var questions = document.querySelector(".question-title");
var answersContainer = document.querySelector(".answers-container");
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("start-button");
var submitBtn = document.getElementById("submit-button")
var secondsLeft = 75;
var timerInterval;
var initials = document.getElementById("input")
var startPage = document.getElementById("start-page");

var currentQuestionIndex = 0;
var score = 0;

var myQuestions = [
	{
		question: "What is the capital of Germany?",
		answers: [
			'Munich',
			'Berlin',
			'Frankfurt'
		],
		correctAnswer: 'b'
	},
	{
		question: "What is the capital of Spain",
		answers: [
			'Barcelona',
			'Ibiza',
			'Madrid'
		],
		correctAnswer: 'c'
	},
  {
		question: "What is capital of Poland?",
		answers: [
			'Kraków',
			'Warzaw',
			'Lublin'
		],
		correctAnswer: 'b'
	},
  {
		question: "What is the capital of Iceland?",
		answers: [
			'Reykjavík',
			'Kópavogur',
			'Hafnarfjörður'
		],
		correctAnswer: 'a'
		},
  {
		question: "What is the capital of Latvia?",
		answers: [
			'Liepāja',
			'Riga',
			'Jūrmala'
		],
		correctAnswer: 'b'
	}
];

function setTime() {
    timerInterval = setInterval(function() {
	
      secondsLeft--;
      timeEl.textContent = "Time remaining: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
};

function sendMessage() {
    timeEl.textContent = "Time remaining: 0";
	questions.textContent = "Game Over! Enter your initials below";
	answers.textContent = "";
	start.textContent = "Try again";
	var initials = document.createElement("input");
	answers.appendChild(initials);
	start.addEventListener("click", function tryAgain(){
		window.location.reload();
	})
  };

  
  // setTime();

//function to move to the first question
function startQuestions() {
	var currentQuestion = myQuestions[currentQuestionIndex];
	questions.textContent = currentQuestion.question;
	answersContainer.innerHTML = "";
	currentQuestion.answers.forEach(function(answer) {
		var answerBtn = document.createElement("button");
		answersContainer.appendChild(answerBtn);
		answerBtn.innerHTML = answer;
		answerBtn.onclick = pressBtn;
	})
}

function pressBtn() {
	if (this.value !== myQuestions[currentQuestionIndex].answers) {
		secondsLeft -= 5;
		if (secondsLeft < 0) {
			secondsLeft = 0
		}
		timerInterval.textContent = secondsLeft;
	} 

	currentQuestionIndex++
	score += 1; // make it show in the html

	if (currentQuestionIndex === myQuestions.length) {
		endGame(); 
	} else {
		startQuestions();
	}
}

//end game function **this is important
function endGame() {
	questions.textContent = "You got " + score + " out of 5";
	answersContainer.innerHTML = "Enter your initials";
	var setInitials = document.createElement("input");
		answersContainer.appendChild(setInitials);
	var submitBtn = document.createElement("button");
		submitBtn.textContent = "Submit!";
		submitBtn.setAttribute("class", "submit-button")
		answersContainer.appendChild(submitBtn);
		clearInterval(timerInterval);
		// submitBtn.addEventListener("click", function() {
		// 	localStorage.setItem("Initials", initials);
		// 	localStorage.setItem("Score", score);
		// })
}
//save highscores with local storage

// submitBtn.addEventListener("click", function() {
// 	localStorage.setItem("Initials", initials);
// })

startBtn.addEventListener("click", function() {
	setTime();
	startPage.setAttribute("class", "hidden");
	startQuestions();
})