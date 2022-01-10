// Selection Sort 

// Like bubble sort, but a little better.
// in first loop, searches for lowest value
// when finished, swaps lowest value for value at 0 index
// on second loop, searches for second lowest value, then
// swaps with value at 1 index
// continue this pattern until whole array is sorted

function selectionSort(arr){
    for(var minStart = 0; minStart < arr.length; minStart++){
        var min = minStart; 
        for(var i = min; i < arr.length; i++){
            if(arr[min] > arr[i]){
                min = i;
            }
        }
        var temp = arr[min];
        arr[min] = arr[minStart];
        arr[minStart] = temp;
        console.log(arr);
    }
    return arr;
}
console.log(selectionSort([5,4,2,6,8,14,1,3]));