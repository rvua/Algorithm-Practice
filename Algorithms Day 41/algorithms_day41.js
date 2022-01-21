//A pangram is a sentence or phrase that uses every letter of the alphabet
//Write a function to return if a string contains at least one of every
//letter(not case sensitive).
//return true or false
//toUpperCase is a good idea to use
//if(str[0] >= "A" && str[0] <= "Z") can be useful
function isPangram(str) {
    let alphabet = new Set();
    for (let char of str.toLowerCase()) {
        if (char.match(/[a-z]/)) {
            alphabet.add(char);
        }
    }
    return alphabet.size === 26;
}
console.log(isPangram("Waxy and quivering, jocks fumble the pizza."));//returns true
console.log(isPangram("The quick brown fo jumps over the lazy sleeping dog"));//missing x, returns false
console.log(isPangram("Sphinx of black quartz, judge my vow"));
console.log(isPangram("A"));


// Different Solution 
const isPangram = (str) => {
    const newStr = str.toUpperCase(); 
    var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(var i = 0; i < alph.length; i++){
        var check = false;
        // console.log(alph[i]);
        for(var j = 0; j < newStr.length; j++){
            // console.log(newStr[j]);
            if(newStr[j] === alph[i]){
                check = true;
                
            }
        }
        if(!check){
            return false
        }
    }
    return true;
}
console.log(isPangram("Waxy and quivering, jocks fumble the pizza."));//returns true
console.log(isPangram("The quick brown fo jumps over the lazy sleeping dog"));//missing x, returns false
console.log(isPangram("Sphinx of black quartz, judge my vow"));
console.log(isPangram("A"));