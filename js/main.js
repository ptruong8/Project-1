//Phuc Truong
//February 27, 2019
//Create the function submitPokemon() which will create a response once the user answers all the questions
function submitPokemon () {
	//variables that will hold the input of their respective questions answered by the user
	var question1 = parseInt(document.querySelector("input[name='pokemon1']:checked").value);
	var question2 = parseInt(document.querySelector("input[name='pokemon2']:checked").value);
	var question3 = parseInt(document.querySelector("input[name='pokemon3']:checked").value);
	var question4 = parseInt(document.querySelector("input[name='pokemon4']:checked").value);
	var question5 = parseInt(document.querySelector("input[name='pokemon5']:checked").value);
	var question6 = parseInt(document.querySelector("input[name='pokemon6']:checked").value);
	var question7 = parseInt(document.querySelector("input[name='pokemon7']:checked").value);
	var question8 = parseInt(document.querySelector("input[name='pokemon8']:checked").value);
	var question9 = parseInt(document.querySelector("input[name='pokemon9']:checked").value);
	var question10 = parseInt(document.querySelector("input[name='pokemon10']:checked").value);
	// a variable that sums up the entire questions
	var userScore = question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10;

	//based on the userScore variable, the if statement will send an appropriate response
	if (userScore == 10){
		document.querySelector(".pokemon-result").innerHTML = "Congragulations, you are a Pokemon Master!";
	}else if (userScore >= 5 && userScore <=9) {
		document.querySelector(".pokemon-result").innerHTML = "Great, you are a Ace Trainer.";
	}else{
		document.querySelector(".pokemon-result").innerHTML = "You suck at Pokemon.";
	}
}//