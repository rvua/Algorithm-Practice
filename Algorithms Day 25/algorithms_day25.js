// Binary Search

// Given a sorted array and a value, return whether
//  the array contains that value. Do not sequentially 
//  iterate the array. Instead 'divide and conquer'. 
//  Taking advantage of the fact that array is sorted. 

       
function binarySearch(arr, n){
    let mid = Math.floor(arr.length / 2);
    if (arr.length === 1 && arr[0] != n) {
        return false;
    }    
    if (n === arr[mid]) {
        return true;
    } else if (arr[mid] > n) {
        console.log(arr[mid])
        return binarySearch(arr.slice(0, mid), n);
    } else if (arr[mid] < n) {
        console.log(arr[mid])
        return binarySearch(arr.slice(mid, arr.length), n);
    }
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 17));


function binarySearchRecursive(arr, target){
}

// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 9));
// ---> 1 2 3 4 5  |  6 7 8 9 10
// ---> 6 7  |  8 9 10
// ---> 8  [9]  10  (found)