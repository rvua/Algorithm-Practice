//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//and don't you dare use built in functions for this one!
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!
const dedupe = (str) => {
    let newString = ""
    //loop through string
    for (let i = str.length - 1; i >= 0; i--) {
        var found = false;
        for (let j = 0; j < newString.length; j++) {
            //check if letter is in new string
            if (str[i] == newString[j]) {
                found = true
            }
        }
        //if not, add letter to new string
        if (found == false) {
            newString = str[i] +newString  
        }
    //return new string
    } return newString
}

console.log(dedupe("Snaps! crackles! pops!"));
console.log(dedupe("Did I shine my shoes today?"));
console.log(dedupe("scoop dedupe!")); 