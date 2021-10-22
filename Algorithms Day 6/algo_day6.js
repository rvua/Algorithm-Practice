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
function d6() {
    // create a variable and assign a random decimal number between 0 and 1 to it.
    var roll = Math.random();
    // multiply by six to change the range. now we get a decimal number between 0 and 5.
    roll = roll * 6;
    // add one to roll, so our range is now a decimal number from 1 to 6.
    roll = roll + 1;
    // chop off that decimal number with Math.floor
    roll = Math.floor(roll);
    // all done! return our result.
    return roll;
}
  
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

// Q.3 Consult the Oracle:
// Using the following array, write a function that will answer all of our questions by randomly choosing a response
function magic8Ball(){
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

// let's create an index variable that's a random decimal number between 0 and the length of the lifesAnswers array.
var index = Math.random() * lifesAnswers.length;
// chop off that decimal on our index.
index = Math.floor(index);
// return a random answer
return lifesAnswers[index];
}

// Hey, magic eightball, will I pass the yellow belt exam?
var reply = magic8Ball();
console.log(reply)