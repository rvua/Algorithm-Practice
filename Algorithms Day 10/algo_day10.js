// Q.1
// Implement reverseString(str) that takes in a string, and then returns a string of the same length, but
// with the characters reversed 

// Example: "creature" ----> "erutaerc"
// assume its a single word

// Dont use the built-in reverse() method

function reverseString(str){
    var newStr = "";
    for(var i = str.length - 1; i >= 0; i--){
        newStr += str[i]
    } 
console.log(newStr);
}
reverseString("creature")

// Q.2:
// Create a function that, given a string, returns the string's acronym (first letter's only, capitalized).
         //  0123456789
// Example: "there's no free lunch - gotta pay yer way" --> "TNFL-GPYW""

function acronym(str) {
    var newStr = str[0].toUpperCase();
    for(var i=0; i < str.length; i++){
        if(str[i] == " "){
            newStr += str[i + 1].toUpperCase();
        }
    }
    console.log(newStr)
}
acronym("there's no free lunch - gotta pay yer fee");