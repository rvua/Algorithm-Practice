//Intersect two arrays to create an unsorted multiset
//return the new array of all the values that both arrays
//have in common

//[6,7,2,7,6,2], [2,7,2,1,2] returns [7,2,2]

const intersectUnsorted = (arrLeft, arrRight) => {
    const newArray = [];
    //loop through arrLeft
    for(let i = 0; i < arrLeft.length; i++){
        //loop through arrRight, start at arrLeft poistion
        for(let j = 0; j < arrRight.length; j++){
            //look for value from arrLeft
            //if found,
                //push to new arr
            if (arrLeft[i] === arrRight[j]){
                newArray.push(arrLeft[i]);
                arrRight.splice(j,1);
                break;
            }
        }

    }
    return newArray;  
}

console.log(intersectUnsorted([6,7,2,7,6,2], [2,7,2,1,2]));
// console.log(intersectUnsorted([1,2,2,27,2],[2,2,6,6,7]));
// console.log(intersectUnsorted([1,5,9],[2,6,10,0,0,0,1]));
// console.log(intersectUnsorted([6,19,0,0,9,32,4],[2,0,6,7,18,0,6,1]));
// console.log(intersectUnsorted([23,4,100,108,16,15,2,8,42],[0,4,8,15,-100,42,108,23,16]));

//return a new unsorted union multiset of two arrays
//essentially same as yesterday but your input is unsorted
//don't just sort the arrays, then do a union!
//[2,7,2,1,2], [6,7,2,7,6,2] returns [7,2,7,2,2,1,6,6]
//(or a different combination of the same numbers, since it's unsorted)

const unionUnsorted = (leftArr, rightArr) => {
    var newArr = [];
    for(let i = 0; i < leftArr.length; i++){
        for(let j = 0; j < rightArr.length; j++) {
            if(leftArr[i] == rightArr[j]){
                newArr.push(leftArr[i]);
                rightArr.splice(j, 1);
                leftArr.splice(i, 1);
                i--;
                break;
            }
        } 
    }
    return newArr.concat(leftArr).concat(rightArr)
}

console.log(unionUnsorted([2,7,2,1,2], [6,7,2,7,6,2]));
// console.log(unionUnsorted([2,1,10,7,9],[3,10,2,7,9,5,2]));
// console.log(unionUnsorted([2,2,7,1,2],[2,2,6,7,6]));