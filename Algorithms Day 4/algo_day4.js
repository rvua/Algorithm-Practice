// Alogrithm 1
// Pseudo-Code: 
// 1. Set var named x to 5
// 2. Declare a function named setX with a argument of newValue.
// 3. Inside the body of the function set x to newValue
// 4. Console.log(x) which will be 5 
// 5. Call the function setX with an argument of 15 which will result in 15
// 6. Console.log(x) again which will equal 5 
var x = 5;
    
function setX(newValue) {
    x = newValue; 
}
    
console.log(x);
setX(15);
console.log(x);

// Algorithm 2
// 1. Set a variable named x to 5
// 2. Declare a function named addToX with an argument of amount 
// 3. In the body of the function, When the function is called, return the value of x added to the argument (amount)
// 4. Dont need to do anything until the console.log(x) which is 5
// 5. Set a variable named result to the function addToX(-10);
// 6. Console.log the variable result which will equal -5 because 5 - -10 is -5 
// 7. Console.log(x) which is 5. 
var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hello there");
}
console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);

// Algorithm 3 
// 1. Declare a function named isPal with an argument (arr) 
// 2. Create a for loop and set the variable left to 0; 0 is less than the length of the arr 
// divided by 2; and increment left by 1
// 3. Inside the body of the function, create a variable named right and set it to the length of the argument arr minus 
// 1 minus the value of left.
// 4. On the next line inside the body, create a if statement with the condition of arr[index of left] is not equal to the index
// of right. 
// 5. If this statement is true then return "Not  pal-indrome" 
// 6. Set a variable named result1 and set it to the function isPal with the array [1,1,2,2,1]
// 7. Console.log the variable result 1 
// right equals the length of the array which is 5 minus 1 minus 1 
// if left is not right the return not a pal-indrome
// 8. Set a variable name result2 and set it to the function isPal with the array []

// This function is comparing the numbers in the array and asking if they are not equal 
// 1. Define a function but skip passed it 
// 2. set variable result1 to the 
function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal([1, 1, 2, 2, 1]);
console.log(result1);
    
var result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2);