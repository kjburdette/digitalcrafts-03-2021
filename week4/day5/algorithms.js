// const stringReversal = (string) => {
//     var reversedString = "";
//     for (var i = string.length -1; i >=0; i-- ){
//         reversedString += string[i]
//     }
//     console.log(reversedString);

// }
// stringReversal("Hello")

// const palindrome = (string) => {
//     var reversedString = "";
//     for (var i = string.length -1; i >=0; i-- ){
//         reversedString += string[i]
//     }
//     if (reversedString === string){
//         return true
//     }
//     else 
//         return false
// }

// console.log(palindrome("racecar"))


const reverse = (string) => {
    let reversed = "";
    for(let char of string){
      reversed = char + reversed;
    }
    console.log(reversed);
}

reverse("These are not the droids you are looking for")

const palindrome = (string) => {
    let reversed = "";
    for(let char of string){
      reversed = char + reversed;
    }
    if (reversed === string){
        return true
    }
    else {
        return false
    }
}

console.log(palindrome("racecar"))

