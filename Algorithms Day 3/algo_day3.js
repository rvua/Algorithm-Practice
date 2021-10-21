// Algorithm 1 

// Have a 'game plan' before writing code. This is called 'pseudocode'. 
// Conditionals - or - 'if statements'

var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

// New keyword alert ! 'if starts a conditional statement. 
// Followed by a set of parantheses. 
// Inside these paranthesis, place a 'boolean expression' 
// If what is in the paranthesis is true, then what is inside of the code block will run. 
// After closing the paranthesis, place curly braces at the bookends of the code block. 

if(isSunny) {
    // The below code means -> whatToBring = whatToBring + "sunglasses, ";
  whatToBring += "sunglasses, ";
}
console.log(whatToBring);
// -> I should bring: sunglasses, 

if(temperature < 50) {
  whatToBring += "a coat, ";
}
console.log(whatToBring);

// Boolean expression is false - No running of the code block.
if(isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
console.log(whatToBring);
// -> I should bring: sunglasses, a coat, and a smile!


// Algorithm 2

// Prepare for downcount
// Else means - OTHERWISE!!!
for(var i=10; i>0; i--) {
    if(i != 2) {
      console.log(i);
    } else { 
      console.log("ignition!");
    }
  } 
  console.log("liftoff!");
  

// Algorithm 3

// Step 1 - Run through each value in the array 
// Step 2 - Compare each value greater than -1 
// Step 3 - If statement, add 1 for each time the array index is positive 
// Step 4 - console.log(CountPositives)
var countPositives = 0;
var countNegatives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
for(var i=0; i<numbers.length; i++){
    if(numbers[i] >= 0){
        countPositives++;
    }
    else {
      countNegatives++;
    }
}
console.log("there are " + countPositives + " positive values, and " + countNegatives + " negative values.");

// Narciso Solution
// <-PseuodoCode-> 

var numbers = [3, 4, -2, 7, 16, -8, 0];
// Create a variable called count and set it to 0. 
var count = 0;
// Create a for loop. Start at 0, end at the end of the array, increment by one
for(var i=0; i<numbers.length; i++){
  // Inside the for loop, check to see if current value is positive
  if(numbers[i] > 0){
    // If so, then increment count
    count++;
  }
}
// After the loop, print count
console.log("there are " + count + " positive values")