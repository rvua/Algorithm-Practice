// Create a function that, given an input string, returns a boolean true/false whether parentheses in that string are valid.

// Example 1:"y(3(p)p(3)r)s" --> true
// Example 2: "n(0(p)3" --> false
// Example 3: "n)0(t(o)k" --> false

// hint: consider using an array or object to solve

// check entire string, return true/false
// every single opening parens has a closing
// never hit an closing parens before a opening parens
// ONLY care about the parens in the string

function parensValid(str) {
    var openParens = [];
    var closeParens = [];
      for (var x = 0; x < str.length; x++) {
        if (closeParens.length > openParens.length) {
          return false;
        }
      if (str[x] == '(' ) {
        openParens.push (str[x]);
        }
      if (str[x] == ')' ) {
        closeParens.push (str[x]);
        }
      }
      if (openParens.length == closeParens.length) {
        return true;
      }
      console.log (openParens)
      console.log (closeParens)
      return false;
    }

// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. 

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[a]}}(){bcd}{()}" --> true

// hint: consider using an array or object to solve

function bracesValid(str) {
    var brackets = 0;
    var parens = 0;
    var braces = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] == ')'){
            parens--
        } 
        if(str[i] == '('){
            parens++
        }
        if(str[i] == '}'){
            braces--
        } 
        if(str[i] == '{'){
            braces++
        }
        if(str[i] == ']'){
            brackets--
        } 
        if(str[i] == '['){
            brackets++
        }
        if(parens < 0 || brackets < 0 || braces < 0){
            return false
        }
    }
    if(parens > 0 || brackets > 0 || braces > 0){
        return false
    } else if (parens == 0 || brackets == 0 || braces == 0){
        return true
    }
}
console.log(bracesValid("({[({})]})")) // true
console.log(bracesValid("d(i{a}l[t]o)n{e!")) // false
console.log(bracesValid("{{[a]}}(){bcd}{()}")) // true
console.log(bracesValid("{([}}}")) // false