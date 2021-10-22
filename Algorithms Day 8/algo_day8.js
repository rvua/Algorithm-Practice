// Q.1 
// Nesting Arrays:
// Arrays are capable of having arrays inside of them. Assuming we're given an array like...
var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
console.log(arr2d[0][2]);
// Now get the 6 
console.log(arr2d[1][1]);
// We can console.log the `8` in this array if we
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

// Could we determine if a certain value was present? Write a function called isPresent2d(arr2d, value) that returns true if the value is present and false otherwise
// Note - Don't assume the array will always be the same size, we must rely on its .length property
// Hint - Can we put a for loop inside another for loop?
var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];

function isPresent2d(arr2d, value){
    // loop through the outer array
    for(var i = 0; i < arr2d.length; i++){
        // loop through each inner array
        for(var j = 0; j<arr2d[i].length; j++){
            // check if any values in the inner array match the given value
            if(arr2d[i][j] === value){
                // if we find it, go ahead and return true. We dont need to check anymore values
                return true;
            } 
        }
    } 
    // if we make it down here, that means we never found the value. return false.
    return false;
} 
console.log(isPresent2d(arr2d, 7));

// Q.2
// Flatten Arrays: 
// Given a 2 dimensional array (an array containing arrays), return a new array containing just the values from inside the sub-arrays. 
// Don't assume the array will always be the same size, or that the sub-arrays are all the same length (the array might be jagged). 
// Don't use built-in methods like Array.prototype.flat() but feel free to use .push(value) and/or .pop() where needed.

// complete the following function
function flatten(arr2d) {
    // create an empty array to hold the values. this will stay 1d - flat
    var flat = [];
    // a loop for the parent array
    for(let i = 0; i<arr2d.length; i++){
        // a nested loop for the child arrays
        for(let j=0; j<arr2d[i].length; j++){
        flat.push(arr2d[i][j]);
        }
    }
    // return when done with outer loop
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result);  // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

// Solution 2 
function flatten(arr) {
    var flat = [];
    {
        for(var i=0; i < arr.length; i++)
        {
            for(var x=0; x < arr[i].length; x++)
            {
                flat.push(arr[i][x])
            }
        }
    }
    return flat;
}

var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result);