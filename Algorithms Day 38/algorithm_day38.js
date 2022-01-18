// Rotating Strings 

//Create a standalone function that accepts a string
//and an integer, and rotates the characters in the
//string to the right by that amount.
//this one must be done without built in methods
//("Did I shine my shoes today?", 9) ->
//"es today?Did I shine my sho"
const rotateString = (str, num) => {
    let rword = "";
    for(let i = 0; i < str.length; i++) {
        if(i < num) {
            rword += str[str.length - num + i];
        }
        else {
            rword += str[i - num];
        }
    }
    console.log(rword);
    return rword;
}
rotateString("Did I shine my shoes today?", 9);

// let testString = "012345";
// console.log(rotateString(testString, 3));
// let shoes = "Did I shine my shoes today?";
// console.log(rotateString(shoes, 9));

//write a function that will return true if str2 is a
//rotation of str1. otherwise return false
//("Did I shine my shoes today?", "es today?Did I shine my shoe")
// -> returns true
const isRotation = (str1, str2) => {
    if(str1.length == str2.length && (str1 + str1).indexOf(str2) != -1) {
        return true
    } 
    return false
} 

console.log(isRotation("Did I shine my shoes today?", "es today?Did I shine my sho"));
console.log(isRotation("Did I shine my shoes today?", "shoes today?Did I shine my "));