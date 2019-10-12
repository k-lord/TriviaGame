//array of objects for each question
var triviaQuestions = [{
    question: "Who is NOT a member of the Finer Things Club?",
    answerList: ["Pam", "Oscar", "Toby", "Andy"],
    answer: 3
}, {
    question: "Who started 'The Fire'?",
    answerList: ["Michael", "Ryan", "Dwight", "Meredith"],
    answer: 1
}, {
    question: "Who is Phyllis's husband?",
    answerList: ["Bob Vance", "David Wallace", "Todd Packer", "Robert California"],
    answer: 0
}, {
    question:"Which one of Angela's cats does Dwight kill?",
    answerList:["Bandit","Sprinkles","Sparkles","Fluffy"],
    answer: 1
}, {
    question:"Which office employee does Michael hit with his car?",
    answerList:["Creed","Dwight","Meredith","Ryan"],
    answer: 2
}, {
    question:"What is the name of the company that bought Dunder Mifflin?",
    answerList:["Office Depot","Office Max","Staples","Sabre"],
    answer: 3
}, {
    question:"What type of car does Dwight drive?",
    answerList:["Pontiac Trans Am","Corvette","Camaro","Toyota Prius"],
    answer: 0
}, {
    question:"What is Scranton's nickname?",
    answerList:["The Little Apple","The Green City","The Electric City","The Windy City"],
    answer: 2
}, {
    question:"What item did The Office secretly swap for Creed's apple?",
    answerList:["Tomato","Potato","Onion","Orange"],
    answer: 1
}, {
    question:"According to Prison Mike, what's the worst part of prison?",
    answerList:["The Orcs","The Banshees","The Dementors","The Nightmares"],
    answer: 2
}, {
    question:"What is the name of Ryan's company that sends messages to all of your devices at once?",
    answerList:["Wuphf","Baark","Meoww","Grrowl"],
    answer: 0
}, {
    question:"In 'The Injury', what is Michael's injury?",
    answerList:["He gets his head stuck in a railing.","He crashes his car into a telephone pole.","He crashes the forklift in the warehouse.","He burns his foot on a Foreman Grill."],
    answer: 3
}, {
    question:"What is the preferred pizza place among The Office staff?",
    answerList:["Domino's","Pizza by Alfredo","Alfredo's Pizza Cafe","Pizza Hut"],
    answer: 2
}, {
    question:"How many vasectomies has Michael had?",
    answerList:["One","Two","Three","Four"],
    answer: 2
}, {
    question:"What does Michael buy from the Warehouse guys, thinking it's marijuana to frame Toby?",
    answerList:["Oregano","Caprese Salad","Sage","Pencil Shavings"],
    answer: 1
}];

var gifArray = ["question1", "question2", "question3", "question4","question5","question6","question7","question8","question9","question10","question11","question12","question13","question14","question15"];

//set initial var values for the game functions

var currentQuestion;

var correctAnswer; var incorrectAnswer; var unanswered;

var seconds; var time;

var answered;

var userSelect;

var messages = {
    correct: "Yes, that's right!",
    incorrect: "Nope. Better luck next time.",
    endTime: "Out of time!",
    finished: "Alright! Let's see how you did."
};

//to start and restart the game when user clicks the start button

$("#startBtn").on("click", function() {
    $(this).hide();
    newGame();
});

$("#startOverBtn").on("click", function() {
    $(this).hide();
    newGame();
});

//initial game function when game starts/restarts:

function newGame() {
    $("#finalMessage").empty();
    $("#correctAnswers").empty();
    $("#incorrectAnswers").empty();
    $("#unanswered").empty();
    currentQuestion = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    newQuestion();
}

function newQuestion(){
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();
	answered = true;
	
	//sets up new questions & answerList
    $("#currentQuestion").html("Question " + (currentQuestion + 1) + "/" +triviaQuestions.length);
    
    $('.question').text(triviaQuestions[currentQuestion].question);
    
	for(var i = 0; i < 4; i++){
		var choices = $("<div>");
		choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
        $('.answerList').append(choices);
    };
    
	countdown();
	//clicking an answer will pause the time and setup answerPage
	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');
		clearInterval(time);
		answerPage();
	});
}

function countdown(){
	seconds = 10;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;
	//sets timer to go down
	time = setInterval(showCountdown, 1000);
}

function showCountdown(){
	seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		answerPage();
	}
}

function answerPage(){
	$('#currentQuestion').empty();
	$('.thisChoice').empty(); //Clears question page
	$('.question').empty();

	var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
	var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
	$('#gif').html('<img src = "assets/images/'+ gifArray[currentQuestion] +'.gif" width = "400px">');
	//checks to see correct, incorrect, or unanswered
	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$('#message').html(messages.correct);
	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
		answered = true;
	}
	
	if(currentQuestion == (triviaQuestions.length-1)){
		setTimeout(scoreboard, 5000)
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 5000);
	}	
}

function scoreboard(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();

	$('#finalMessage').text(messages.finished);
	$('#correctAnswers').text("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').text("Incorrect Answers: " + incorrectAnswer);
	$('#unanswered').text("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').text('Click HERE to Start Over');
}










