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
	var started = false;

// arrays for hidden word and users choice
	var hiddenWord = [];
	var usersChoice = [];
	var wrongChoice = [];
	var pressedL = [];
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
		var letters = pressedL.push(String.fromCharCode(event.keyCode).toUpperCase());
//if else statement that will store letters into usersChoice or wrongChoice
		if (pressedL === getRandomWord[i]) {
			usersChoice.push(letters);
		}
		else if (pressedL !== getRandomWord[i]) {
			wrongChoice.push(letters);
		} 
		console.log(letters);
	};

//fucuntion to start game when Start! is clicked


	console.log(usersChoice);
	console.log(hiddenWord);
});