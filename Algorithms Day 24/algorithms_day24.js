Balance Point and Balance Index!!!

// WRITE A FUNCTION THAT RETURNS WHETHER THE GIVEN ARRAY HAS A BALANCE POINT BETWEEN THE VALUES
// WHERE ONE SIDE IS EQUAL TO THE OTHER
// if [0] + [1] + [2] + [3] + [4] = [5]  return true
// Hard Coded Solution
function balancePoint(arr){
    var len = arr.length;
    var sum = 0;
    for(i = 0; i <= len; i++){
        sum += arr[i];
    }
    if(arr[0] + arr[1] + arr[2] + arr[3] == arr[4]){
        return true
    } else{
        return false
    }
}

// CORRECT SOLUTION
function balancePoint(arr){
    var len = arr.length;
    var sum = 0;
    var leftSum = 0;
    for(i = 0; i < len; i++){
        sum += arr[i];
    }
    for(var i = 0; i < len; i++){
        var rightSum = sum - leftSum - arr[i]
        leftSum = leftSum + arr[i]
        if(leftSum == rightSum){
            return true
        }
    }
    return false
}

// Different Solution:
function balancePoint(arr){
    var sum = 0;
    var leftSum = 0;

    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    for (i = 0; i < arr.length; i++) {
        leftSum += arr[i];
        sum -= arr[i];
        if (leftSum == sum) {
            return true;
        }
    }
    return false;
}

console.log(balancePoint([1,2,3,4,10])) // TRUE
// ---> 1+2+3+4 = 10     10 == 10 so balanced
console.log(balancePoint([1,2,3,2,1])) // FALSE
console.log(balancePoint([1,2,3,1,2,3,2,1])) // FALSE
console.log(balancePoint([2,2])) // TRUE

function balanceIndex(arr) {
    let total = arr.reduce((a, b) => a + b);
    let sumLeft = 0;
    if(arr.length < 3){
        return 'no index'
    }
    for(let i = 0; i < arr.length; i++){
        total = total - arr[i];
        // compares the sum to the left of current index against total
        if(sumLeft === total) {
            // if the sums match, the current index will be returned
            return i;
        }
        sumLeft += arr[i];
    }
    return -1;
    // Returning -1 shows that there is no index in the array that exists
}

// console.log(balanceIndex([-2,5,7,0,3]))  // TRUE
// console.log(balanceIndex([9,9])) // FALSE
// console.log(balanceIndex([4,2,2,6])) // TRUE
// console.log(balanceIndex([9,1,9])) // TRUE
// console.log(balanceIndex([1,8,1,2,3,4])) // TRUE