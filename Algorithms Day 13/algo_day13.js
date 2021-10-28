// Use the bookIndex function below to receive a sorted array of page numbers
// and then return a STRING that combines consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12,14,15,16,17] returns "1, 3-5, 7-8, 10, 12, 14-17"

// HINTS: 
// You'll want a way to look at the current value and then look at the next one to see if it's one higher
// If it is, then you've found a range, if it's not, you haven't
// You could create a string and add to it, or get rid of the values in the array that aren't needed 
// and convert to a string, or whatever way you come up with!

function bookIndex(arr){ // i =0 [1,2,3,4,5,7,8,10,12,14,15,16,17] length = 12
    var range = [];
    for(i = 0; i < arr.length; i++){
        var temp = i; 
        while(arr[i+1] == arr[i] + 1){
            i++;
        }
        if(temp == i){
            range.push(arr[i]);
        }
        else{
            range.push(arr[temp] + "-" + arr[i])
        }
    }
    return range;
}
console.log(bookIndex([1,3,4,5,7,8,10,12,14,15,16,17]))


// Solution 2: 

function bookIndex(arr){ // i =0 [1,2,3,4,5,7,8,10,12,14,15,16,17] length = 12
    var str = "";
    for(var i = 0; i < arr.length; i++){
        if(arr[i + 1] === arr[i] + 1){
            var start = arr[i];
            while (arr[i + 1] === arr[i]+1){
                i++;
            }
            var end = arr[i];
            str += start + "-" + end;
        }
        else{
            str += arr[i]
        }
        if (i !== arr.length-1){
            str += ",";
        }
    }
    return str;
}
console.log(bookIndex([1,3,4,5,7,8,10,12,14,15,16,17]))