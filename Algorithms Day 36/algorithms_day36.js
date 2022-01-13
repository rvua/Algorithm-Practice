// Recursion and Quick Sort

const partition = (arr) => {
    // console.log(arr);
    const pivot = arr[0];
    let pivi = 0;

    for(let i = 1; i < arr.length; ++i){
        if(arr[i] < pivot){
            ++pivi;
            for(let j = i - 1; j >= 0; --j){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return pivi;
}

//time for recursion again!!
//partition your array, then quickSort the left half
//and the right half.
//Each half should be partitioned and quickSorted recursively.
// First Solution 
const quickSort = (arr) => {
    console.log(arr); 
    if(arr.length < 2) return arr;
    const pivi = partition(arr);
    //console.log(arr);
    //console.log(pivi);
    let left = arr.slice(0, pivi);
    let right = arr.slice(pivi + 1, arr.length);

    left = quickSort(left);
    right = quickSort(right);

    //return [...left, arr[pivi], ...right];
    const newArray = left.concat(arr[pivi], right);
    return newArray;
}
console.log(quickSort([7,45,2,67,3,2,1])); 

// Another Solution 
const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    } else {
         var left = [];
         var right = [];
         var newArray = [];
         var pivot = arr.pop();
         var length = arr.length;
 
         for (var i = 0; i < length; i++) {
             if (arr[i] <= pivot) {
                 left.push(arr[i]);
             } else {
                 right.push(arr[i]);
             }
         }
         return newArray.concat(quickSort(left), pivot, quickSort(right));
    }
 }
 console.log(quickSort([7,45,2,67,3,2,1]));