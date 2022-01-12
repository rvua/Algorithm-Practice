//partition the array around the value at arr[0]
//without creating a new array
//values left of the original pivot should be less than the pivot
//values right of the pivot should be >= the pivot value
//note: each side of the partitioned value does not
//have to be sorted.
//return the newly partitioned array
//bonus: return the index where the value at 0 ends up
//[5,4,9,2,5,3] -> [4,2,3,5,9,5], return 3
const partition = (arr) => {
    const pivot = arr[0];
    for(var i = 0; i < arr.length; i++){
        // console.log(arr[i]);
        if(arr[i+1] < pivot){
            //put value at index 0
            // console.log(`${arr[i+1]} is less than ${pivot} so it needs to be moved`);
            const temp = arr[i+1];
            arr.splice(i+1,1);
            arr.unshift(temp);
        }
    }
    return arr;
}

//should return [4,2,3,5,9,5]
console.log(partition([5,4,9,2,5,3]));
//should return [4,7]
console.log(partition([7,4]));
//should return [2,1,3,4,5]
console.log(partition([3,5,1,2,4]));

console.log(partition([7,2,10,15,1]));