//var to appear in the question and answers
var questions = document.querySelector(".question-title");
var answersContainer = document.querySelector(".answers-container");
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("start-button");
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
		correctAnswer: 'Berlin'
	},
	{
		question: "What is the capital of Spain",
		answers: [
			'Barcelona',
			'Ibiza',
			'Madrid'
		],
		correctAnswer: 'Madrid'
	},
  {
		question: "What is capital of Poland?",
		answers: [
			'Kraków',
			'Warzaw',
			'Lublin'
		],
		correctAnswer: 'Warzaw'
	},
  {
		question: "What is the capital of Iceland?",
		answers: [
			'Reykjavík',
			'Kópavogur',
			'Hafnarfjörður'
		],
		correctAnswer: 'Reykjavík'
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
        endGame();
      }
  
    }, 1000);
};


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

function pressBtn(event) {
	var presionado = event.target.innerText;
	
	if (presionado !== myQuestions[currentQuestionIndex].correctAnswer) {
		secondsLeft -= 5;
		if (secondsLeft < 0) {
			secondsLeft = 0
		}
		timerInterval.textContent = secondsLeft;
	} else score += 1;

	currentQuestionIndex++

	if (currentQuestionIndex === myQuestions.length) {
		endGame(); 
	} else {
		startQuestions();
	}
}

function endGame() {
	questions.textContent = "You got " + score + " out of 5";
	answersContainer.innerHTML = "Enter your initials";
	var setInitials = document.createElement("input");
		answersContainer.appendChild(setInitials);
	var submitBtn = document.createElement("button");
		submitBtn.textContent = "Submit!";
		answersContainer.appendChild(submitBtn);
	var viewHighscores = document.createElement("a");
		viewHighscores.textContent = "View Highscores";
		viewHighscores.setAttribute("href", "highscores.html");
		answersContainer.appendChild(viewHighscores);
		clearInterval(timerInterval);
		submitBtn.addEventListener("click", function() {
			localStorage.setItem("Initials", setInitials.value);
			localStorage.setItem("Score", score);
		})
}

startBtn.addEventListener("click", function() {
	setTime();
	startPage.setAttribute("class", "hidden");
	startQuestions();
})