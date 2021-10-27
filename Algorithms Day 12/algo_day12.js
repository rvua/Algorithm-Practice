// Q.1
// A Palindrome is a word, phrase, or sequence that reads the same backward as forward
// Examples: madam, civic, radar, level, rotor, kayak, refer, racecar, tacocat, etc.
// Use the isPalindrome function below to receive a string and return true if it's a Palindrome
// and false if it is not. Do not ignore whitespaces, casing matters!!

// Example 1: "racecar" returns true
// Example 2: "e tacocat e" returns true
// Example 3: "abba" returns true 
// Example 4: "Dud" returns false
// Example 5: "oho!" returns false
// Example 6: " to " returns false

// HINTS: You can loop through a string
// Figure out a way to compare one side of the string with it's opposite pair
// If those elements don't match then it's not a Palindrome
// If we make it through our loop and never hit false, then it should be a Palindrome
// length, split, join, concacte 
function isPalindrome(str) {
    for(var i = 0; i < str.length / 2; i++){
        var j = str.length - 1 - i;
        if(str[i] != str[j]) {
            return false
        }
    }
    return true
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("e tacocat e"));
console.log(isPalindrome("abba")); 
console.log(isPalindrome("Dud")); 
console.log(isPalindrome("oho!")); 
console.log(isPalindrome(" to "));

// Solution 2:
function isPalindrome(str){
    var newString = "";
    for (var i = str.length - 1; i > -1; i--){
        newString += str[i]
    }
    if (newString == str){
        return true
    }
    else {
        return false
    }
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("e tacocat e"));
console.log(isPalindrome("abba")); 
console.log(isPalindrome("Dud")); 
console.log(isPalindrome("oho!")); 
console.log(isPalindrome(" to "));

// Q.2 
// Use the longestPalindrome function below to receive a string and return the 
// longest palindrome it can find in the whole string.  Include spaces as well!
// If the palindromes have the same length, keep the one most recently found

// Example 1: "my favorite racecar erupted" returns "e racecar e"
// Example 2: "nada" returns "ada"
// Example 3: "nothing to see" returns "ee"
// Example 4: "hello dada" returns "dad"
// Example 5: "not much" returns "n"
function longestPalendrome(string){
    var longest = string[0];
    for(var i = 0; i < string.length; i++){
        for(var j = 0; j < string.length; j++){
            var check = string.slice(i,j+1)
            if(isPalindrome(check) && check.length > longest.length){
                longest = check;
            }
        }
    }
    return longest
}
console.log(longestPalendrome("my favorite racecar erupted")); 
console.log(longestPalendrome("nada"));
console.log(longestPalendrome("nothing to see")); 
console.log(longestPalendrome("hello dada")); 
console.log(longestPalendrome("not much")); 