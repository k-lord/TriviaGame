var totalCorrect = 0;

var totalIncorrect = 0;

var count = 10;

var current = 0;

var question1 = {
    question: "Who is not a member of the Finer Things Club?",
    choices: ["Pam", "Oscar", "Toby", "Andy"],
    images: ["./assets/images/finerthingsclub.gif"],
    correct: 3
};

var question2 = { 
    question: "Who started the fire?",
    choices: ["Michael", "Ryan", "Dwight", "Meredith"],
    images: ["./assets/images/ryanstartedthefire.gif"],
    correct: 1,
};

var question3 = {
    question: "Who is Phyllis's husband?",
    choices: ["Bob Vance", "David Wallace", "Todd Packer", "Robert California"],
    images: ["./assets/images/bobvance.gif"],
    correct: 0,
};

console.log("hello");

console.log("the first question is: " + question1.question);

function askQuestion() {
    
    $("#time").text(count);

    $("#question").text(question1.question);

    for (i = 0; i < question1.choices.length; i++) {
        console.log("choice: " + question1.choices[i]);
        $("#A").text(question1.choices[0]);
        $("#B").text(question1.choices[1]);
        $("#C").text(question1.choices[2]);
        $("#D").text(question1.choices[3]);
    }

    correct = question1.choices[3];
    console.log("answer is: " + correct);

    userPick = $(".list-group-item").on("click", function() {
        console.log("You chose an option.");

    });
    
    if (userPick === correct) {
        console.log("You're right!");
    } else {
        console.log("You're wrong!");
    }
        
    

    

};

askQuestion();












