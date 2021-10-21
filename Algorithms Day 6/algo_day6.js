// Q.1 Math Library: 
// Predict what each of the following will return. Can we predict the variable random?
var floor = Math.floor(1.8);
var ceiling = Math.ceil(Math.PI);
var random = Math.random();
    
console.log(floor); // Floor Rounds down to 1 
console.log(ceiling); // Ceil Rounds Up to 4
console.log(random);


// Q.2 Dice Roller:
// Using what we've learned about the Math library in JavaScript, complete the following function that should return a value between 1 through 6 at random.
function d6(){
    return Math.floor((Math.random() * 6) + 1);
}
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);


// Q.3 Consult the Oracle:
// Using the following array, write a function that will answer all of our questions by randomly choosing a response
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function d6(min, max) {
    // var roll = Math.random(1,6);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
    
var playerRoll = d6(0,lifesAnswers.length-1);
console.log(lifesAnswers[playerRoll]);