var letters = ["h", "a", "n", "g", "m", "a", "n"]; /*Inside Display???*/
var userPicks = []; /*All of these variables inside the Object? With a thisdot.*/
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

document.onkeyup = function() {
	var compChoice = letters[0];/*I can turn this into function()display{} word*/
	var userChoice = event.key;
	userPicks.push(userChoice);

	if (userChoice == compChoice) { /*And this into a this.function*/
		winCount++;
		guessesLeft = 9;	
		letters.splice(0,1);
		userPicks.length = 0;
		var para = document.createElement("P");
		document.getElementById("answer").append(userChoice);
	} else {
		guessesLeft--;
	}
	if(guessesLeft == 0) {
		lossCount++;
		alert("You lose!");
		guessesLeft = 9;
		userPicks.length = 0;
	}

	document.querySelector("#wins").innerHTML = "Wins: " + winCount;
	document.querySelector("#losses").innerHTML = "Losses: " + lossCount;
	document.querySelector("#guesses_left").innerHTML = "Guesses Left: " + guessesLeft;
	document.querySelector("#guesses").innerHTML = "Your guesses: " + userPicks;
}
