$(function () {
// array carring all words available to be picked
	var wordLibrary = ["PANDA","JAGUAR", "SEALION"];

//begging of variable linking to elements in index.html
	var startM = document.getElementById('startMessage');
	var start = document.getElementById('start');
	var result = document.getElementById('result');
	var word = document.getElementById('word');
	var remaining = document.getElementById('remaining');
	var guessed = document.getElementById('guessed');
	var audio = new Audio("assets/e-s.mp3");
	var started = false;

// arrays for hidden word and users choice
	var hiddenWord = [];
	var usersChoice = [];
// variable that will get a random numnber from 0 to 2
	var randomNum = Math.floor((Math.random() * wordLibrary.length));
console.log(randomNum);

// function that will choose a random word from wordLibrary
	var getRandomWord = wordLibrary[randomNum];
	console.log(getRandomWord.length);

//for loop that gets every letter in getRandomWord and pushes it to hidden word as "_ "
	for (i = 0; i < getRandomWord.length; i++) {
		hiddenWord.push(getRandomWord[i] = "_ ");
		};

//code that will pick up whatever key the user presses
	document.onkeypress = function(event) {

// variable that will store the key that was pressed
		var letters = String.fromCharCode(event.keyCode).toUpperCase();

//if else statement that will store letters into usersChoice or wrongChoice
		usersChoice.push(letters);
	};


//function that will sort the letter in users choice to push and append users choice to .word or to .guessed
	function letterSorter () {

			if (getRandomWord[0].indexOf(i) === usersChoice) {
				hiddenWord.push(usersChoice + " ");
				word.append(hiddenWord);
			}
			if (getRandomWord[1].indexOf(i) === usersChoice) {
				hiddenWord.push(usersChoice + " ");
				word.append(hiddenWord);
			}
			if (getRandomWord[2].indexOf(i) === usersChoice) {
				hiddenWord.push(usersChoice + " ");
				word.push(usersChoice + " ");
			}
			if (usersChoice !== getRandomWord[0].indexOf()) {
			guessed.html(usersChoice);
		}
		
		
	}
		
//fucuntion to start game when Start! is clicked
	function startGame() {
		started = true;
		letterSorter();
		if (started === true) {
			startM.innerHTML = "Lets Play!";
			$(word).html(hiddenWord);
			
		};
	};

//function that would keep track if we are guessing the correct word and would tell us if we won

//function that would keep track of how many guesses we have left and would tell us if we lost

//function that would reset the game and choose a new word if the user wins or looses

	start.addEventListener('click', startGame);
	console.log(letterSorter());
	console.log(usersChoice);
	console.log(hiddenWord);
	console.log(started);
});