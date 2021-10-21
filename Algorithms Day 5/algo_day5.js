// Algorithm 1: 
// How to swap variables:
// What do we expect the output to be?
var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
    
console.log(fruit2 + " and " + fruit1);


// What do you think this code will output
var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);

// While Loops 
var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}

// Reversing an array
var arr = ["a", "b", "c", "d", "e"];
var arr_reversed = arr.reverse();
console.log('array reversed: ', arr_reversed); 

// Different way
function reverseArr(arr){
    var newarr = [];
    for (var i = arr.length - 1; i >= 0; i--){
        newarr.push(arr[i]);
}
console.log(newarr);
}
reverseArr(["a", "b", "c", "d", "e"]);