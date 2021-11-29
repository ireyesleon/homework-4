//var to appear in the question and answers
var questions = document.querySelector(".question-title");
var answers = document.querySelector(".answers");
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var secondsLeft = 75;

var myQuestions = [
	{
		question: "What is the capital of Germany?",
		answers: {
			a: 'Munich',
			b: 'Berlin',
			c: 'Frankfurt'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is the capital of Spain",
		answers: {
			a: 'Barcelona',
			b: 'Ibiza',
			c: 'Madrid'
		},
		correctAnswer: 'c'
	}
  {
		question: "What is capital of Poland?",
		answers: {
			a: 'Kraków',
			b: 'Warzaw',
			c: 'Lublin'
		},
		correctAnswer: 'b'
	}
  {
		question: "What is the capital of Iceland?",
		answers: {
			a: 'Reykjavík',
			b: 'Kópavogur',
			c: 'Hafnarfjörður'
		},
		correctAnswer: 'a'
	}
  {
		question: "What is the capital of Latvia?",
		answers: {
			a: 'Liepāja',
			b: 'Riga',
			c: 'Jūrmala'
		},
		correctAnswer: 'b'
	}
];

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
    timeEl.textContent = "Time remaining: 0";
    var gameOver = document.createElement("img");
    gameOver.setAttribute("src", "assets/images/image_1.jpg");
    mainEl.appendChild(gameOver);
  
  }


  
  // setTime();

//function to move to the first question



// clic event to move to the first question
